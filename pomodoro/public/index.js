
let segundos = 0
let minutos = 0
var pausado = false
const pause = document.querySelector('#pausar')
const start = document.querySelector('#iniciar')
const stop = document.querySelector('#parar')
function iniciar(){
    pausado = false
    interval = setInterval(async()=>{  
        if (!pausado) {
            
                segundos++
                if(segundos % 60 ===0 ){
                    minutos++
                    segundos = 0
                }
               document.querySelector(".display-1").innerText = `${minutos.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}`
            }
            
        }, 1000);
        pause.style.display = 'block'
        start.style.display = 'none'
}
function pausar() {
    pausado = true
    pause.style.display = "none";
    start.style.display = "block"
    clearInterval(interval)
    }
function parar(){
    clearInterval(interval)
    segundos = 0
    minutos = 0
    document.querySelector(".display-1").innerText = `${minutos.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}`
    pause.style.display = 'none'
    start.style.display = 'block'

}


