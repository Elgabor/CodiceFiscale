var consonanti = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var vocali = ["a", "e", "i", "u", "o"];
var comuni = [["M201","ZUMAGLIA"], ["A271", "ANCONA"],["H501","ROMA"], ["F205", "MILANO"], ["D612", "FIRENZE"], ["A944", "BOLOGNA"], ["L736", "VENEZIA"], ["A662", "BARI"]];
var charControl = [
  [0, "1"], [1, "0"], [5, "2"], [7, "3"], [9, "4"], [13, "5"], [15, "6"], [17, "7"], [19, "8"], [21, "9"],
  [1, "A"], [0, "B"], [5, "C"], [7, "D"], [9, "E"], [13, "F"], [15, "G"], [17, "H"], [19, "I"], [21, "J"],
  [2, "K"], [4, "L"], [18, "M"], [20, "N"], [11, "O"], [3, "P"], [6, "Q"], [8, "R"], [12, "S"], [14, "T"],
  [16, "U"], [10, "V"], [22, "W"], [25, "X"], [24, "Y"], [23, "Z"]
];
// function calculate name
function calcoloNome(nome) {
    var result = "";
    nome = nome.toLowerCase().replace(/\s/g, ""); // Remove spaces and convert to lowercase
    var consonantiCount = 0;
  
    for (var i = 0; i < nome.length && result.length < 3; i++) {
      var carattere = nome.charAt(i);
      if (consonanti.includes(carattere)) {
        if (consonantiCount === 0 || consonantiCount === 2 || consonantiCount === 3) {
          result += carattere;
        }
        consonantiCount++;
      }
    }
  
    if (result.length < 3) {
      if (consonantiCount === 2) {
        for (var i = 0; i < nome.length && result.length < 3; i++) {
          var carattere = nome.charAt(i);
          if (vocali.includes(carattere)) {
            result += carattere;
          }
        }
      } else if (result.length === 2) {
        result += "x";
      }
    }
  
    return result.toUpperCase();
  }
//function calculate surname
function calcoloCognome(cognome) {
    var result = "";
    cognome = cognome.toLowerCase().replace(/\s/g, ""); // Remove spaces and convert to lowercase
    var consonantiCount = 0;
  
    for (var i = 0; i < cognome.length && result.length < 3; i++) {
      var carattere = cognome.charAt(i);
      if (consonanti.includes(carattere)) {
        if (consonantiCount < 3) {
          result += carattere;
        }
        consonantiCount++;
      }
    }
  
    if (result.length < 3) {
      for (var i = 0; i < cognome.length && result.length < 3; i++) {
        var carattere = cognome.charAt(i);
        if (vocali.includes(carattere)) {
          result += carattere;
        }
      }
    }
  
    if (result.length < 3) {
      while (result.length < 3) {
        result += "x";
      }
    }
  
    return result.toUpperCase();
  }
// function calculate date
function calcoloData(dataDiNascita, sesso) {
  let result = "";

  // Verify if the date of birth is in the correct format dd/mm/yyyy
  var dataPattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dataPattern.test(dataDiNascita)) {
    console.error("Inserire il formato corretto: gg/mm/aaaa");
    return result;
  }

  result += dataDiNascita.substr(8, 2); // Take the last two digits of the year

  var mese = dataDiNascita.substr(3, 2); // Take the two digits of the month
  var result1 = "";

  switch (mese) {
    case "01":
      result1 = "A";
      break;
    case "02":
      result1 = "B";
      break;
    case "03":
      result1 = "C";
      break;
    case "04":
      result1 = "D";
      break;
    case "05":
      result1 = "E";
      break;
    case "06":
      result1 = "H";
      break;
    case "07":
      result1 = "L";
      break;
    case "08":
      result1 = "M";
      break;
    case "09":
      result1 = "P";
      break;
    case "10":
      result1 = "R";
      break;
    case "11":
      result1 = "S";
      break;
    case "12":
      result1 = "T";
      break;
    default:
      console.error("Inserisci un mese valido");
      return result;
  }

  var giorno = dataDiNascita.substr(0, 2);
  giorno = parseInt(giorno);

  if (sesso === "F") {
    giorno += 40;
  } else if (sesso !== "M") {
    console.error("Metti un sesso valido");
    return result;
  }

  result += result1 + ("0" + giorno).slice(-2); //Add the leading zero if necessary

  return result;
}

//function municipalityCode
function calcoloCodiceComune(nomeComune) {
  for (let i = 0; i < comuni.length; i++) {
    if (comuni[i][1].toUpperCase() === nomeComune.toUpperCase()) {
      return comuni[i][0];
    }
  }
  
  //If the name of the municipality is not found, return undefined.
  return undefined;
}


//function check code
function calculateControlCode(code) {
  var sum = 0;

  for (var i = 0; i < code.length; i++) {
    var character = code.charAt(i).toUpperCase();

    if (i % 2 === 0) { // Caratteri dispari
      if (character in charControl) {
        sum += charControl[character][0];
      }
    } else { // Caratteri pari
      if (character in charControl) {
        sum += charControl[character][1];
      }
    }
  }

  var remainder = sum % 26;
  var controlCharacter = controlCodes[remainder];

  return controlCharacter;
}
console.log(calculateControlCode("BRGLNZ03H12L736"));

document.getElementById('dati_utente').addEventListener('submit', function(event){
  event.preventDefault();

  var nome = document.getElementById('name').value;
  var cognome = document.getElementById('surname').value;
  var dataDiNascita = document.getElementById('data').value;
  var sesso = document.getElementById('sesso').value;
  var comune = document.getElementById('comune').value;

  var rCognome = calcoloCognome(cognome);
  var rNome = calcoloNome(nome);
  var rdataDinascita = calcoloData(dataDiNascita, sesso);
  var rCodice = calcoloCodiceComune(comune);
 

  var risHTML = "Risultato: " + rCognome + rNome + rdataDinascita + rCodice;
  
  document.getElementById('codice_finale').innerText = risHTML;

  document.getElementById('dati_utente').reset();
});