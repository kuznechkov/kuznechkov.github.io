const cat = document.getElementById('cat-pic');
const result = document.getElementById('cat-result');
const status = document.getElementById('cat-status');
const audio = document.getElementById('fart');

cat.addEventListener('click', () => {
    cat.style.display = "none"; 
    
    result.style.display = "block"; 
    
    status.innerText = "Котик восседает в Преисподней";
    status.style.color = "#ff4444";

    console.log("Вторая стадия активирована!");
    
    audio.volume = 0.5;
    audio.play();
});


