//Pedir tres números y obtener el mayor de ellos.
var mayor
var calculo=(a,b,c)=>{
    
    if((a>b) && (a>c)){
        mayor=a
       
    }
    else if((b>a) && (b>c)){
        mayor=b
       
    }
    else{
        mayor=c
        
    }
    console.log(`El numero mayor es ${mayor}`)
}


calculo(3,5,7)
calculo(8,1,7)
calculo(8,1,76)
calculo(3,7,5)