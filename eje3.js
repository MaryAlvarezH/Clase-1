/*Escriba un programa que pida el año actual y un año cualquiera y que escriba 
cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.*/

var mensaje=(act,cual)=>{
    if(act>cual){
        console.log(`Faltan ${act-cual} para el ${act}`)
    }
    else {
        console.log(`Han pasado ${cual-act} desde el ${act}`)
    }
}

mensaje(2018,2020)