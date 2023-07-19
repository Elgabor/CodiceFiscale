var consonanti = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var vocali = ["a", "e", "i", "u", "o"];
var comuni = [["M201","ZUMAGLIA"], ["A271", "ANCONA"],["H501","ROMA"], ["F205", "MILANO"], ["D612", "FIRENZE"], ["A944", "BOLOGNA"], ["L736", "VENEZIA"], ["A662", "BARI"]];
var charControl = [
  ["0", 1], ["1", 0], ["2", 5], ["3", 7], ["4", 9], ["5", 13], ["6", 15], ["7", 17], ["8", 19], ["9", 21],
  ["A", 1], ["B", 0], ["C", 5], ["D", 7], ["E", 9], ["F", 13], ["G", 15], ["H", 17], ["I", 19], ["J", 21],
  ["K", 2], ["L", 4], ["M", 18], ["N", 20], ["O", 11], ["P", 3], ["Q", 6], ["R", 8], ["S", 12], ["T", 14],
  ["U", 16], ["V", 10], ["W", 22], ["X", 25], ["Y", 24], ["Z", 23]
];
var riscontrol = [
  [0, "A"], [1, "B"], [2, "C"], [3, "D"], [4, "E"], [5, "F"], [6, "G"], [7, "H"], [8, "I"], [9, "J"],
  [10, "K"], [11, "L"], [12, "M"], [13, "N"], [14, "O"], [15, "P"], [16, "Q"], [17, "R"], [18, "S"], [19, "T"],
  [20, "U"], [21, "V"], [22, "W"], [23, "X"], [24, "Y"], [25, "Z"]
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
function calculateControlCode(halfcode) {
  var half_code = halfcode.toString();
  console.log(half_code);
  half_code = Array.from(halfcode);
  console.log(half_code);
  var sum = 0;
  for (let i = 0; i < half_code.length; i++) {
    for (let j = 0; j < charControl.length; j++) {
      if (half_code[i] === charControl[j][0]) {
        sum += charControl[j][1];
        break; 
      }
    }
  }

  let tot = sum/26
  var ris = Math.floor(tot);
  var letter = "";

  for(let y = 0; y < riscontrol.length; y++){
      if(ris === riscontrol[y][0]){
          letter = riscontrol[y][1];
          break;
      }
  }
  return letter;
}



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
  var ris = rCognome + rNome + rdataDinascita + rCodice;
  var check_letter = calculateControlCode(ris);
  var risHTML = "Risultato: " + rCognome + rNome + rdataDinascita + rCodice + check_letter;
  
  document.getElementById('codice_finale').innerText = risHTML;

  document.getElementById('dati_utente').reset();
});