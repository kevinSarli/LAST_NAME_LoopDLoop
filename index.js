/*
¿Cómo sabemos que necesitamos un bucle aquí? hay que incrementar de a 1 hasta llegar a 10
¿Cuál es el punto de partida del bucle? i = 0
¿Cuándo debe detenerse el bucle?  i < 10
¿Cómo sabrá parar? cuando ya no se cumpla la condicion
¿Cuál es el incremento para cada iteración del bucle? i++
¿Qué variables necesitamos? var i - var velocidad
*/

var i = 0
var velocidad = 10//km por hora
while (i < 10) {
    i++
    if (i ===3 || i===6 || i===9 ) {
        if (velocidad > 9) {
            console.log("dar un caramelo")
        }
        
    }
    console.log(i)
    
}