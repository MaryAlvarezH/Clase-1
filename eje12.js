//Pide un numero y guarda en una lista su tabla de multiplicar hasta el 10

var tabla =(n)=>{
    var list=[]
    var res
    for(var i=0; i<=10; i++){
        res=n*i
        list.push(res)
    }
    console.log(list)
}
tabla(5)