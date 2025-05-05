document.addEventListener('DOMContentLoaded', () => {

    //& ---------background étoile 
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
        starField.appendChild(star);
        
        setTimeout(() => star.remove(), 2000);
    };

   
    setInterval(createStar, 50);
});



//& -------------Sélectionner le bouton menu sur mobile
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});



//&---------------------Etoile cursor

const starCursor = document.createElement('div');
starCursor.classList.add('star-cursor');
document.body.appendChild(starCursor);

document.addEventListener('mousemove', (e) => {
    starCursor.style.left = `${e.pageX}px`;
    starCursor.style.top = `${e.pageY}px`;
});

//&-----------------------Bouton retour

document.getElementById("return").addEventListener("click",() => {
    window.location.href = 'projets.html';
})


//&---------------------------Logo

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("logo").addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
//&----------------------------- Bouton swip
document.addEventListener("DOMContentLoaded", function () {
    const pages = ["finance.html", "frappe.html", "cache.html", "quiz.html", "italie.html", "souvenir.html"];
    
    function getNextPage(direction) {
        let currentPage = window.location.pathname.split("/").pop(); 
        let index = pages.indexOf(currentPage);

        if (index === -1) return; 

        if (direction === "prev") {
            index = (index + 1) % pages.length; 
        } else {
            index = (index - 1 + pages.length) % pages.length; 
        }

        window.location.href = pages[index];
    }

    document.querySelector(".swipPrev").addEventListener("click", function () {
        getNextPage("prev");
    });

    document.querySelector(".swipNext").addEventListener("click", function () {
        getNextPage("next");
    });
});


//&------------------------------PDF 

    function PDF() {
        window.open("CV.pdf", "_blank");
    }
