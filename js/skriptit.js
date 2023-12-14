let refresh = 0;

function myFunction() {
  console.log(refresh);
  if (refresh === 1) {
    return;
  }
  refresh = 1;

  // Comedies - Tragedies - History flexataan riviin.
  var ekasection = document.getElementById("eka");
  var ekaul = ekasection.getElementsByTagName("ul")[0];
  ekaul.style.display = "flex";
  ekaul.style.gap = "4rem";
  ekaul.style.listStyle = "none";

  // Comedies - Tragedies - History, Listan tausta harmaaksi.
  var topLevelLiElements = document.querySelectorAll("#eka > ul > li > ul");
  topLevelLiElements.forEach((ul) => {
    ul.style.backgroundColor = "rgb(201, 201, 201)";
  });

  // Toisen osan tablen leveys 100%
  var tokatable = document.querySelector("#toka table");
  tokatable.style.width = "100%";

  // Tablen 3x td kaikki saman kokoisiksi
  var tokatabletd = document.querySelectorAll("#toka table td");
  tokatabletd.forEach((td) => {
    td.style.width = "33%";
  });

  // Kolmas osa 66% leveys koko ruudusta
  var kolmastable = document.querySelector("#kolmas > table");
  kolmastable.classList.add("kolmastable");
  kolmastable.style.width = "66%";

  // Kolmannen osan tablen kaksi td vie kummatkin 50%
  var kolmastabletd = document.querySelectorAll("#kolmas table td");
  kolmastabletd.forEach((td) => {
    td.style.width = "50%";
  });

  // Toisen ja kolmannen osan taulun rivien taustavärit harmaaksi
  var evenRowToka = document.querySelectorAll("#toka table tr:nth-child(even)");
  var oddRowKolmas = document.querySelectorAll(
    "#kolmas table tr:nth-child(odd)"
  );
  evenRowToka.forEach((row) => {
    row.style.backgroundColor = "rgb(177, 177, 177)";
  });
  oddRowKolmas.forEach((row) => {
    row.style.backgroundColor = "rgb(177, 177, 177)";
  });

  // Kaikkien linkkien alle piste -alleviivaus, väri. Poistetaan muut muotoilut.
  // lisätään iconit
  let allLinks = document.querySelectorAll("a");

  allLinks.forEach((a) => {
    let href = a.getAttribute("href");
    a.style.textDecoration = "none";

    let spanElem = document.createElement("span");
    spanElem.innerText = a.innerText;
    a.innerText = "";
    spanElem.style.textDecoration = "none";
    spanElem.style.borderBottom = "3px dotted red";
    spanElem.style.color = "red";
    spanElem.style.fontWeight = "700";
    spanElem.style.fontStyle = "italic";
    a.appendChild(spanElem);

    if (href.endsWith(".pdf")) {
      let iconElem = document.createElement("i");
      iconElem.classList.add("fa-solid", "fa-file-pdf");
      iconElem.style.color = "red";
      iconElem.style.paddingInlineStart = "0.5rem";
      a.append(iconElem);
    }
    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:")
    ) {
      let iconElem = document.createElement("i");
      iconElem.classList.add("fa-solid", "fa-paper-plane");
      iconElem.style.color = "#ee784f";
      iconElem.style.paddingInlineStart = "0.5rem";
      iconElem.style.paddingInlineEnd = "0.5rem";
      a.prepend(iconElem);
    }
    if (href.startsWith("mailto:")) {
      let iconElem = document.createElement("i");
      iconElem.classList.add("fa-regular", "fa-envelope");
      iconElem.style.color = "#ee784f";

      a.prepend(iconElem);
    }
  });
}
