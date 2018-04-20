//Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.

var comparacion=(a,b)=>{
    if (a>b){
        console.log("El mayor es: "+ a)
        console.log("El menor es: "+ b)
    }

    else if(b>a){
        console.log("El mayor es: "+ b)
        console.log("El menor es: "+ a)
    }
    else if(a==b){
        console.log("Los numeros son iguales")
    }
}

comparacion(5,1)