document.addEventListener("DOMContentLoaded", () => {
    
    // Gérer la newsletter (Simulation)
    const newsForm = document.getElementById("newsletter-form");
    if (newsForm) {
        newsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("news-msg").style.display = "block";
            newsForm.reset();
            setTimeout(() => {
                document.getElementById("news-msg").style.display = "none";
            }, 3000);
        });
    }

    // Gérer le formulaire de signalement (Génération de mailto)
    const signalementForm = document.getElementById("signalement-form");
    if (signalementForm) {
        signalementForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const type = document.getElementById("type").value;
            const localisation = document.getElementById("localisation").value;
            const description = document.getElementById("description").value;
            
            const emailDestinataire = "conseil.syndical@residence.fr"; // Remplacez par le vrai email
            const sujet = encodeURIComponent(`Nouveau Signalement : ${type} - ${localisation}`);
            const corps = encodeURIComponent(
                `Bonjour le conseil syndical,\n\nVoici un nouveau signalement :\n\n` +
                `- Type : ${type}\n` +
                `- Localisation : ${localisation}\n` +
                `- Description : ${description}\n\n` +
                `Cordialement,\nUn résident.`
            );

            // Ouvre le client mail par défaut de l'utilisateur
            window.location.href = `mailto:${emailDestinataire}?subject=${sujet}&body=${corps}`;
            
            alert("Votre client de messagerie va s'ouvrir pour envoyer le signalement.");
            signalementForm.reset();
        });
    }
});
