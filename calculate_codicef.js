var consonanti = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var vocali = ["a", "e", "i", "u", "o"];

// Calcola nome
function calcoloNome(nome) {
    var result = "";
    nome = nome.toLowerCase().replace(/\s/g, ""); // Rimuovi spazi e converti in minuscolo
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
// Calcola cognome
function calcoloCognome(cognome) {
    var result = "";
    cognome = cognome.toLowerCase().replace(/\s/g, ""); // Rimuovi spazi e converti in minuscolo
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
// Calcola data
function calcoloData(dataDiNascita, sesso) {
  let result = "";

  // Verifica se la data di nascita è nel formato corretto gg/mm/aaaa
  var dataPattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dataPattern.test(dataDiNascita)) {
    console.error("Inserire il formato corretto: gg/mm/aaaa");
    return result;
  }

  result += dataDiNascita.substr(8, 2); // Prende gli ultimi due numeri dell'anno

  var mese = dataDiNascita.substr(3, 2); // Prende i due numeri del mese
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

  result += result1 + ("0" + giorno).slice(-2); // Aggiunge lo zero iniziale se necessario

  return result;
}

//function codiceComune



//function 



console.log(calcoloCognome("borgato"), calcoloNome("lorenzo"), calcoloData("12/06/2003", "M"))