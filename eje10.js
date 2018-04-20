/*Determine el descuento de un artículo por medio de la cantidad,
si compras mas de 5 artículos tiene un 5% de descuento, en caso contrario no tiene descuento*/

/*var descuentito=(cant,precio)=>{
    var sum=0
    for(var i=0; i<=cant; i++){
    var total=i*precio
    }

    if(cant>5){
        console.log(`El costo tal por ${cant} articulos a $ ${precio} con un 5% de descuento es: ${total-(total*0.05)}`)
    }
    else{
        console.log(`El costo total por ${cant} articulos a $ ${precio} es ${total} `)
    }
}
descuentito(4,10)*/

var art1={nombre:"Cuaderno", costo:15}
var art2={nombre:"Lapiz", costo:7}
var art3={nombre:"Goma", costo:5}
var art4={nombre:"Sacapuntas", costo:10}
var art5={nombre:"Mochila Kawaii", costo:600}
var art6={nombre:"Plumones", costo:200}

var list=[]
var sum=0

list.push(art1,art2,art3,art4, art5, art6)
console.log(list)
console.log(list[0].costo)
var cuenta=(list)=>{
    for(var j=0; j<=list.length-1; j++){
      sum=sum+(list[j].costo)
    }
    if(list.length+1>5){
        console.log(`El costo por ${list.length} articulos es: ${sum} con el 5% de descuento es: ${sum-(sum*0.05)}`)
    }
    else {
        console.log(`El costo por ${list.length} articulos es: ${sum}`)
    }
}
/*console.log(list)
console.log(list[0]) //imprime la posicion 0 de la lista
console.log(list[0].costo)*/


/*for(var j=0; j<=list.length-1; j++){
    acum=list.costo
    
}*/

cuenta(list)