window.onload = getLand(); //Kör funktion när hemsidan startar

function getLand() { //Funktion för att hämta landen från JSON-fil
    fetch("land.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
		console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })
}

function appendData(data) { //Funktion för att skriva ut alla städer till hemsidan
    var textLand = document.getElementById("mainContent");

     for (var i = 0; i < data.length; i++) {
         var div = document.createElement("li");
         div.innerHTML = "Land: " + data[i].countryname + "<br>";
         div.id = data[i].id;
        textLand.appendChild(div);
     }
    window.onload = getStad(); //När alla städer skrivits ut körs funktionen för att hämta städer från JSON-fil
}

function getStad() { //Hämta städer från JSON-fil
    fetch("stad.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendStad(data);
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })
}

function appendStad(data) { //Skriv ut städer på hemsidan

    data.sort(function(a, b){ //Sortera städer efter befolkningsmängd
        return b.population-a.population
    })

    //ID på alla olika länder
    var seID = 1;
    var fiID = 2;
    var noID = 3;
    var stadID = 1; //ID på nuvarande stad

     for (var i = 0; i < data.length; i++) {
        var textSE = document.getElementById("1"); //ID för olika textfält, beronde på vilket land som staden ska skrivas till 
        var textFI = document.getElementById("2");
        var textNO = document.getElementById("3");

        //If-statser som kollar vilket land nuvarande stad hör hemma i 
        if(data[i].countryid === seID) {
            var div = document.createElement("ul");
            div.innerHTML = "Stad: " + data[i].stadname + "<br>";
            textSE.appendChild(div);
        }

        else if(data[i].countryid === fiID) {
            var div = document.createElement("ul");
            div.innerHTML = "Stad: " + data[i].stadname + "<br>";
            textFI.appendChild(div);
        }

        else if(data[i].countryid === noID) {
            var div = document.createElement("ul");
            div.innerHTML = "Stad: " + data[i].stadname + "<br>";
            textNO.appendChild(div);
        }

        //Återställ stads-ID för att reflektera antal länder som staden kan tillhöra
        if(stadID === 3) {
            stadID = 0;
        }
        stadID++
     }
}