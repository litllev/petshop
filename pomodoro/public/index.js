
let segundos = 0
let minutos = 0
function cronometro() {
    // Incrementando os segundos a cada segundo
    segundos++;
    if(segundos % 60 ===0 ){
        minutos++
        segundos = 0
    }
    document.querySelector(".display-1").innerText = `${minutos.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}`
    
    // Chamando novamente a função após 1 segundo
    setTimeout(cronometro, 100);
}


