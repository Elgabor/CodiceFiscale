var divText_copy = document.getElementById("codice_finale");

var copyButton = document.getElementById("copybutton");
copyButton.addEventListener("click", function() {
    var textToCopy = divText_copy.textContent;
  
    navigator.clipboard.writeText(textToCopy)
      .then(function() {
        alert("Testo copiato negli appunti!");
      })
      .catch(function(error) {
        console.error("Errore durante la copia del testo:", error);
      });
});
