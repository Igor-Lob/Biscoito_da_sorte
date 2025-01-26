
const fortuneMessages = [
    "Dias melhores virão!",
    "Sua persistência será recompensada.",
    "Uma surpresa agradável está a caminho.",
    "Confie em seus instintos.",
    "Novas oportunidades surgirão em breve.",
    "Sua criatividade o levará longe.",
    "Um novo começo está próximo.",
    "A sorte está do seu lado hoje."
];
const crackSound = new Audio('https://www.soundjay.com/button/sounds/button-10.mp3');
const cookieContainer = document.getElementById('cookie-container');
const cookieLeft = document.getElementById('cookie-left');
const cookieRight = document.getElementById('cookie-right');
const messageDiv = document.getElementById('message');
let isClicked = false;


cookieContainer.addEventListener('click', function() {
    if (isClicked) return; 
    isClicked = true; 

   
    cookieLeft.style.transform = 'translateX(-100%)';  
    cookieRight.style.transform = 'translateX(100%)';  

    
    crackSound.play();

   
    const fortune = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];

    
    setTimeout(() => {
        messageDiv.textContent = fortune;
        messageDiv.style.display = 'block'; 
    }, 500);

    
    setTimeout(() => {
        
        cookieLeft.style.transform = 'translateX(0)';
        cookieRight.style.transform = 'translateX(0)';

        
        messageDiv.style.display = 'none';
        isClicked = false; 
    }, 4000); 
});
