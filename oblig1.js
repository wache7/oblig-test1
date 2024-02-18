const billettRegister = []; // lager en array som skal lagre opplysninger til en person som skal kjøpe en billett.

function registrerBillett(){
    // henter verdiene fra input ved å peke på id til dem.
    const film = document.getElementById("film").value; // verdien av nedtrykkslisten. 
    const antall = document.getElementById("antall").value; // feilmelding? 
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const meldingFilmEL = document.getElementById("film-feilmelding");
    const meldingAntallEl = document.getElementById("antall-feilmelding");
    const meldingFornavnEl= document.getElementById("fornavn-feilmelding"); // bruke innerhtml senere etter å ha opprettet strukturen til tabellen.
    const meldingEtternavnEl = document.getElementById("etternavn-feilmelding");
    const meldingTelefonnrEl = document.getElementById("telefonnr-feilmelding"); // if(isNaN) --> alert. else. 
    const meldingEpostEl = document.getElementById("epost-feilmelding"); // if

    const outputEl = document.getElementById("output");

    // skal lage et objekt som skal settes inn i bilettRegister-arrayet ved bruk av push omsider. 

    const person = {
        film: film,
        antall : antall,
        fornavn : fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost : epost
    };

    billettRegister.push(person);

    if(isNaN(antall) || antall.value=== ""){
    document.getElementById("antall-feilmelding").innerHTML = "Du må skrive et heltall";
}

    if(fornavn.value === ""){
        document.getElementById("fornavn-feilmelding").innerHTML = "Du må skrive navnet ditt";
    }

    if(etternavn.value === ""){
        document.getElementById("etternavn-feilmelding").innerHTML = "Du må skrive etternavnet ditt";
    }

    if(telefonnr.value === "" || isNaN(telefonnr)){
        document.getElementById("telefonnr-feilmelding").innerHTML = "Du må skrive telefonnummeret ditt";
    }

    if(epost.value === "" || epost.value == null){
        document.getElementById("epost-feilmelding").innerHTML = "Du må skrive eposten din";
    }
    
    let ut =  "<table><tr>";
        ut+= "<th> Film </th><th> Antall</th><th> Fornavn </th><th> Etternavn </th> <th> Telefonnr</th><th>E-post</th>"
        ut+= "</tr>";

    for(let p of billettRegister){
        ut+= "<tr>";
        ut+= "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>"
             + p.etternavn + "</td><td>" + p.telefonnr + "</td><td>" + p.epost + "</td>"
    }

    document.getElementById("output").innerHTML = ut;
}


function slettBillett(){
    document.getElementById("film").value ="";
    document.getElementById("antall").value ="";
    document.getElementById("fornavn").value ="";
    document.getElementById("etternavn").value ="";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value ="";
}


// lage feilmelding.
// slett knappen. 