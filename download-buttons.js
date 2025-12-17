// Script pour les boutons de téléchargement avec suivi Microsoft Clarity
document.addEventListener("DOMContentLoaded", function () {
  // Bouton de téléchargement du CV
  const cvButton = document.getElementById("cvButton");
  if (cvButton) {
    cvButton.addEventListener("click", () => {
      // Envoie l'événement à Microsoft Clarity
      if (typeof clarity !== "undefined") {
        clarity("event", "clic_telechargement_cv");
      }
      // Optionnel : petite confirmation en console pour vos tests
      console.log("Événement Clarity envoyé pour le téléchargement du CV !");
    });
  }

  // Bouton de téléchargement de l'APK
  const apkButton = document.getElementById("apkButton");
  if (apkButton) {
    apkButton.addEventListener("click", () => {
      // Envoie l'événement à Microsoft Clarity
      if (typeof clarity !== "undefined") {
        clarity("event", "clic_telechargement_apk");
      }
      // Optionnel : petite confirmation en console pour vos tests
      console.log("Événement Clarity envoyé pour le téléchargement de l'APK !");
    });
  }
});
