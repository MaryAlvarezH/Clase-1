//Suma los elementos de las siguientes dos listas  [4,76,3,12,65,3] ,[234,222,523,65]
var list1 =[4,76,3,12,65,3]
var list2 =[234,222,523,65]
var sumita =(list1,list2)=>{
    var sum
    for(var i=0; i<=list1.length-1; i++){
        sum=(list1[i]+list2[i])
        console.log(sum)
    }
}
sumita(list1,list2)