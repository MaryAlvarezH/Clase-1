//Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos.

var comparacion=(a,b,c)=>{
    if(a==b && b==c){
        console.log("Los numeros son iguales")
    }
    else if(a!=b && b!=c){
        console.log("Los numeros son distintos")
    }

    else if(a==b || b==c){
        console.log("Dos numeros son iguales")
    }
}
comparacion(1,13,3)