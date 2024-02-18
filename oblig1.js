let billettRegister = []; // lager en array som skal lagre opplysninger til en person som skal kjøpe en billett.
// henter verdiene fra input ved å peke på id til dem.
const film = document.getElementById("film").value; // verdien av nedtrykkslisten.
const antall = document.getElementById("antall").value; // feilmelding?
const fornavn = document.getElementById("fornavn").value;
const etternavn = document.getElementById("etternavn").value;
const telefonnr = document.getElementById("telefonnr").value;
const epost = document.getElementById("epost").value;

let meldingFilmEL = document.getElementById("film-feilmelding");
let meldingAntallEl = document.getElementById("antall-feilmelding");
let meldingFornavnEl = document.getElementById("fornavn-feilmelding"); // bruke innerhtml senere etter å ha opprettet strukturen til tabellen.
let meldingEtternavnEl = document.getElementById("etternavn-feilmelding");
let meldingTelefonnrEl = document.getElementById("telefonnr-feilmelding"); // if(isNaN) --> alert. else.
let meldingEpostEl = document.getElementById("e-post-feilmelding"); // if

let outputEl = document.getElementById("output");
function registrerBillett() {
  let booleanValue = true;
  // skal lage et objekt som skal settes inn i bilettRegister-arrayet ved bruk av push omsider.

  const person = {
    film: film,
    antall: antall,
    fornavn: fornavn,
    etternavn: etternavn,
    telefonnr: telefonnr,
    epost: epost,
  };

  if (isNaN(antall) || antall.value === "") {
    meldingAntallEl.innerHTML = "Du må skrive et heltall";
    booleanValue = false;
  }

  if (fornavn.value === "") {
    meldingFornavnEl.innerHTML = "Du må skrive navnet ditt";
    booleanValue = false;
  }

  if (etternavn.value === "") {
    meldingEtternavnEl.innerHTML = "Du må skrive etternavnet ditt";
    booleanValue = false;
  }

  if (isNaN(telefonnr) || telefonnr.value === "") {
    meldingTelefonnrEl.innerHTML = "Du må skrive telefonnummeret ditt";
    booleanValue = false;
  }

  if (epost.value === "") {
    meldingEpostEl.innerHTML = "Du må skrive eposten din";
    booleanValue = false;
  }

  if (booleanValue === true) {
    billettRegister.push(person);
    lagTabell();
  }
}

function lagTabell() {
  let ut = "<table><tr>";
  ut +=
    "<th> Film </th><th> Antall</th><th> Fornavn </th><th> Etternavn </th> <th> Telefonnr</th><th>E-post</th>";
  ut += "</tr>";

  for (let p of billettRegister) {
    ut += "<tr>";
    ut +=
      "<td>" +
      p.film +
      "</td><td>" +
      p.antall +
      "</td><td>" +
      p.fornavn +
      "</td><td>" +
      p.etternavn +
      "</td><td>" +
      p.telefonnr +
      "</td><td>" +
      p.epost +
      "</td>";
  }

  outputEl.innerHTML = ut + "hei";
}

function slettBillett() {
  document.getElementById("film").value = "";
  document.getElementById("antall").value = "";
  document.getElementById("fornavn").value = "";
  document.getElementById("etternavn").value = "";
  document.getElementById("telefonnr").value = "";
  document.getElementById("epost").value = "";

  billettRegister = [];

  outputEl.innerHTML = "";
}

// slett knappen.
