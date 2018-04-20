//Crea una serie Fibonacci
var fibonaxius=(n)=>{
    var x=1
    var y=1
    var z=x+y
for(var i=0; i<n; i++){
    x=y
    y=z
    z=(x+y)
    console.log(z)
}
}

fibonaxius(5)