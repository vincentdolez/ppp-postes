import { DILEMMES, MAILLONS, POSTES, MATRICE, orienter } from "./data.js";

const $ = (sel) => document.querySelector(sel);
const nomPoste = Object.fromEntries(POSTES.map((p) => [p.id, p.nom]));
const nomMaillon = Object.fromEntries(MAILLONS.map((m) => [m.id, m.nom]));
const profil = Array(DILEMMES.length).fill(null);

// Dilemmes
const liste = $("#liste-dilemmes");
DILEMMES.forEach((paire, d) => {
  const li = document.createElement("li");
  li.innerHTML = `<span class="num">${d + 1} / 8</span>`;
  const choix = document.createElement("div");
  choix.className = "choix";
  paire.forEach((libelle, c) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = libelle;
    b.className = c === 0 ? "gauche" : "droite";
    b.addEventListener("click", () => {
      profil[d] = c;
      choix.querySelectorAll("button").forEach((x, i) => x.classList.toggle("actif", i === c));
      majResultat();
    });
    choix.appendChild(b);
    if (c === 0) {
      const ou = document.createElement("span");
      ou.className = "ou";
      ou.textContent = "ou";
      choix.appendChild(ou);
    }
  });
  li.appendChild(choix);
  liste.appendChild(li);
});

function majResultat() {
  $("#octet").textContent = profil.map((c) => (c === null ? "·" : c)).join("");
  if (profil.includes(null)) {
    $("#resultat").hidden = true;
    return;
  }
  const classement = orienter(profil);
  const seuil = classement[2].score;
  const top = classement.filter((p) => p.score >= seuil);
  const hesite = $("#hesite");
  hesite.hidden = top.length <= 3;
  hesite.textContent = `Le modèle hésite : ${top.length} postes sont ex æquo pour les premières places.`;

  $("#top").innerHTML = top
    .map((p) => {
      const raisons = [];
      profil.forEach((c, d) => {
        const pts = MATRICE[d][c][p.id];
        if (pts) raisons.push(`<li>${DILEMMES[d][c]} <b>+${pts}</b></li>`);
      });
      return `<article class="carte">
        <h4>${p.nom}</h4>
        <p class="score">${p.score} points · ${nomMaillon[p.maillon]}</p>
        <p>${p.mission}</p>
        <p class="raisons-titre">Vos choix qui lui ont donné des points :</p>
        <ul class="raisons">${raisons.join("")}</ul>
      </article>`;
    })
    .join("");

  const max = Math.max(...classement.map((p) => p.score), 1);
  $("#barres").innerHTML = classement
    .map(
      (p) => `<div class="barre${p.score >= seuil ? " haut" : ""}">
        <span class="nom">${p.nom}</span>
        <span class="piste"><span style="width:${(p.score / max) * 100}%"></span></span>
        <span class="val">${p.score}</span>
      </div>`
    )
    .join("");
  $("#resultat").hidden = false;
}

// Capot ouvert : matrice
const entete = `<thead><tr><th>Côté choisi</th>${POSTES.map((p) => `<th title="${p.nom}">${p.id}</th>`).join("")}</tr></thead>`;
const lignes = [];
DILEMMES.forEach((paire, d) => {
  paire.forEach((libelle, c) => {
    const cases = POSTES.map((p) => {
      const v = MATRICE[d][c][p.id];
      return `<td class="${v === 2 ? "fort" : v ? "leger" : ""}">${v || ""}</td>`;
    }).join("");
    lignes.push(`<tr class="${c === 1 ? "fin" : ""}"><th>${d + 1}. ${libelle}</th>${cases}</tr>`);
  });
});
$("#matrice").innerHTML = entete + `<tbody>${lignes.join("")}</tbody>`;
$("#code").textContent = orienter.toString();

// Postes
$("#chaine").innerHTML =
  `<ol class="maillons">${MAILLONS.filter((m) => !m.transverse)
    .map((m) => {
      const ps = POSTES.filter((p) => p.maillon === m.id).map((p) => p.nom).join(", ");
      return `<li><b>${m.nom}</b><span>${ps}</span></li>`;
    })
    .join("")}</ol>` +
  MAILLONS.filter((m) => m.transverse)
    .map((m) => {
      const ps = POSTES.filter((p) => p.maillon === m.id).map((p) => p.nom).join(", ");
      return `<p class="transverse"><b>${m.nom}</b>, tout au long de la chaîne : ${ps}</p>`;
    })
    .join("");

$("#fiches").innerHTML = POSTES.map(
  (p) => `<article class="fiche">
    <p class="maillon">${nomMaillon[p.maillon]}</p>
    <h3>${p.nom}</h3>
    <p class="mission">${p.mission}</p>
    <dl>
      <dt>Une journée</dt><dd>${p.journee}</dd>
      <dt>Technologies</dt><dd>${p.technos}</dd>
      <dt>Ce que l’IA change</dt><dd>${p.ia}</dd>
      <dt>Y accéder</dt><dd>${p.acces}</dd>
    </dl>
  </article>`
).join("");
