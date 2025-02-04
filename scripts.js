document.addEventListener('DOMContentLoaded', () => {
    /*const navbar = document.getElementById('navbar');
    
    const menuItems = [
        { text: 'Accueil', link: 'index.html' },
        { text: 'Projets', link: 'projets.html' },
        { text: 'À propos', link: 'about.html' },
        { text: 'Contact', link: 'contact.html' }
    ];

    // Créer les boutons dynamiquement
    menuItems.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.text;
        button.classList.add('nav-button');  // Ajouter une classe pour le style
        button.onclick = () => window.location.href = item.link;  // Ajouter un événement pour la navigation
        
        navbar.appendChild(button);
    });*/

    // d'étoiles scintillantes
    const starField = document.createElement('div');
    starField.classList.add('stars');
    document.body.appendChild(starField);

    const createStar = () => {
        const star = document.createElement('div');
        star.classList.add('star');
        
      
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 2 + 1;
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Ajouter l'étoile au champ d'étoiles
        starField.appendChild(star);
        
        setTimeout(() => star.remove(), 2000);
    };

   
    setInterval(createStar, 50);
});



// Sélectionner le bouton menu burger et la navigation
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

// Ajouter un événement au clic sur le menu burger
menuToggle.addEventListener('click', () => {
    // Alterner la classe "active" pour afficher/masquer le menu
    nav.classList.toggle('active');
});



/*------lier les pages------*/




