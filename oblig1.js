let billettRegister = []; // lager en array som skal lagre opplysninger til en person som skal kjøpe en billett.
// henter verdiene fra input ved å peke på id-en til dem.

function registrerBillett() {
  const film = document.getElementById("film").value; // henter verdien av nedtrykkslisten.
  const antall = document.getElementById("antall").value; //
  const fornavn = document.getElementById("fornavn").value;
  const etternavn = document.getElementById("etternavn").value;
  const telefonnr = document.getElementById("telefonnr").value;
  const epost = document.getElementById("epost").value;

  let booleanValue = true; // lager en type boolean som skal være essensielt for å fange mulige.

  // henter div elementene ved bruk av document.getElementbyId((navnet til diverse divs))
  let meldingFilmEL = document.getElementById("film-feilmelding");
  let meldingAntallEl = document.getElementById("antall-feilmelding");
  let meldingFornavnEl = document.getElementById("fornavn-feilmelding"); // bruke innerhtml senere etter å ha opprettet strukturen til tabellen.
  let meldingEtternavnEl = document.getElementById("etternavn-feilmelding");
  let meldingTelefonnrEl = document.getElementById("telefonnr-feilmelding"); // if(isNaN) --> alert. else.
  let meldingEpostEl = document.getElementById("e-post-feilmelding"); // if

  if (isNaN(antall) || antall === "") {
    console.log("Vi er i input validering for antall");
    meldingAntallEl.innerHTML = "Du må skrive et heltall";
    booleanValue = false;
  } else {
    meldingAntallEl.innerHTML = "";
  }

  if (fornavn === "" || !isNaN(fornavn)) {
    meldingFornavnEl.innerHTML = "Du må skrive navnet ditt";
    booleanValue = false;
  } else {
    meldingFornavnEl.innerHTML = "";
  }

  if (etternavn === "" || !isNaN(etternavn)) {
    meldingEtternavnEl.innerHTML = "Du må skrive etternavnet ditt";
    booleanValue = false;
  } else {
    meldingEtternavnEl.innerHTML = "";
  }

  if (isNaN(telefonnr) || telefonnr === "") {
    meldingTelefonnrEl.innerHTML = "Du må skrive telefonnummeret ditt";
    booleanValue = false;
  } else {
    meldingTelefonnrEl.innerHTML = "";
  }

  if (epost === "") {
    meldingEpostEl.innerHTML = "Du må skrive eposten din";
    booleanValue = false;
  } else {
    meldingEpostEl.innerHTML = "";
  }

  //let outputEl = document.getElementById("output"); // skal skrive ut tabellen.

  console.log("vi er i registrer bilett");

  console.log(fornavn);

  // skal lage et objekt som skal settes inn i bilettRegister-arrayet ved bruk av push omsider.

  const person = {
    film: film,
    antall: antall,
    fornavn: fornavn,
    etternavn: etternavn,
    telefonnr: telefonnr,
    epost: epost,
  };
  if (booleanValue) {
    billettRegister.push(person);
    lagTabell();
  }
}

function lagTabell() {
  // oppretter strukturen til en tabell.
  let ut = "<table><tr>";
  ut +=
    "<th> Film </th><th> Antall</th><th> Fornavn </th><th> Etternavn </th> <th> Telefonnr</th><th>E-post</th>";
  ut += "</tr>";
  // p går gjennom billettregister-arrayet som inneholder objekter.
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

  ut += "</table>";
  document.getElementById("output").innerHTML = ut;
}

function slettBillett() {
  // henter verdien til input, nedtrykksliste og fjerner verdien ved å sette dem slik = ""; ingenting i value.
  document.getElementById("film").value = "";
  document.getElementById("antall").value = "";
  document.getElementById("fornavn").value = "";
  document.getElementById("etternavn").value = "";
  document.getElementById("telefonnr").value = "";
  document.getElementById("epost").value = "";

  billettRegister = []; // nullstiller arrayet som inneholder objekter som fremvises i tabellen.

  document.getElementById("output").innerHTML = "";
}

// slett knappen.
