//Escriba un programa que pida dos números enteros y que calcule su división, escribiendo si la división es exacta o no.
var calculo=(a,b)=>{
    if(((a/b)%2)==0){
        console.log("La division es exacta")
    }
    else {
        console.log("La division no es exacta")
    }
}
calculo(8,2)