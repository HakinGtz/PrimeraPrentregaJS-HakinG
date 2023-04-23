let login=true
identificar=true
let intentos=1
let restantes=3
let iter=0
let total=0;
const IVA=1.16
let lista1=[]
let producto1 = new Catalogo(1,"camara 1488HD Stryker",150000,4)
let producto2 = new Catalogo(2,"camara IM8000 TrueHD Conmed",100000,2)
let producto3 = new Catalogo(3,"MONITOR SIGNOS VITALES MOD. UMEC10 MINDRAY",20000,10)
let producto4 = new Catalogo(4,"Monitor LED 4K Sony Medical",15000,4)
let lista=[producto1, producto2, producto3, producto4]
do{
let option=prompt("Bienvenido a HGBiomedics. Seleccione una opción: 1. Iniciar sesión. 2.Servicios (nota: el catalogo se ve en el console log)")
    if(option==="1"){
        userlog()

        if(option==="1" && login===false){
            alert("Ya has iniciado sesión, por favor selecciona otra opción")
            option=0
        }
        if(restantes===0){
            alert("Ya has excedido el número de intentos permitidos, vuelve a intentarlo después")
            console.error("Error al ingresar, no hay más intentos")
            break;
        }
    }
    if(option==="2"){
            
            alert("Bienvenido a nuestro cátalogo")
            let ir=true;
            while(ir===true){
            let menuser=prompt("Por favor seleccione la opción deseada. 1. Comprar productos. 2. Buscar productos. 3. Agregar productos a la lista que no estén en stock. 4.Ver mi carrito")
            if(menuser==="1"){
                let add=true;
                console.table(lista)
                while(add===true){
                    let id=parseInt(prompt("Agregue al carrito su item escribiendo el ID del producto"))
                    id=id-1;
                    servicio1(lista, id)
                    console.log(total)
                    let add=confirm("¿Desea agregar otro al carrito?")
                    if(add===true){
                        identificar=true
                    }else if(add===false){
                        
                        ir=false;
                        break;
                    }
                }
            }
            if(menuser==="2"){
                filtrarProductos()
                alert("El producto sí está en nuestro inventario")
            }
            if(menuser==="3"){
                agregarProducto()
            }
            if(menuser==="4"){
            console.table(lista1)
            let comprar=confirm("Quieres proceder a la compra")
            if(comprar===true){
                if(lista1!=""){
                    alert("El precio a pagar es de: $"+ total + " MXN")
                    alert("Gracias por su compra")
                    continue
                }else{
                    alert("No hay nada en su carrito")
                    
                }
                
            } else{
                let cancelar=confirm("¿Quiere cancelar la compra?")
                if(cancelar===true){
                    Alert("Que tenga un lindo día!")
                }
            } 
            }
        }
    }else if(option!="1" || option!="2" ||option===null){
        alert("La opción que requieres no existe. Introduzca un número válido")
        identificar=true
    }
    let cancelar=confirm("¿Desea salir?") 
    if(cancelar===true){
        
            alert("Que tenga un lindo día!")
            identificar=false;
            break
    }
}while(identificar===true)


function userlog(){
    let usuario= prompt("ingresa tu usuario")
    let pass= prompt("ingresa tu contraseña, solo tienes: " + restantes + " intentos")
    if(usuario===null || pass===null){
        
    }
    if(usuario==="Hakin" && intentos <=3 && pass==="12345")
    {
        alert("bienvenido " +usuario)
        login=false
        return new Function('return login;')
    }else{
        alert("No se reconoce el usuario: " + usuario + ", O la contraseña introducida no es la correcta")
        intentos++
        restantes--
        if(intentos>3){
            alert("Ya no es posible ingresar, supero los 3 intentos ")
            console.error("no hay mas intentos")
            
        }
    }
}

function Catalogo(ID,modelo,importe,stock){
    this.ID=ID
    this.modelo=modelo
    this.importe=importe
    this.stock=stock
   

}

function servicio1(lista,id){
    console.table(lista[id])
    lista[id].stock=parseInt(lista[id].stock)
    console.log(lista[id].stock)
    confirme=confirm("¿Agregar al carrito?")
    if(lista[id].stock>0 && confirme===true){
        lista[id].stock=parseInt(lista[id].stock)-1
        let importecIVA=parseFloat(lista[id].importe)
        console.log(importecIVA)
        let resultado=(a,b)=>{
            return a*b
        }
        let precio=resultado(importecIVA,IVA)
        console.log(precio)
        total=total+precio
        carrito(id,lista)
        iter=iter+1;
        return total, lista1
    }else if(lista[id].stock===0){
        alert("No tenemos más en stock, favor de intentarlo de nuevo más tarde")
    }
    if(confirme===false){
        return confirme
    }
}
function filtrarProductos(){
    let palabraClave = prompt("Ingresa el producto que deseas buscar").trim().toUpperCase()
    let resultado = lista.filter((catalogo)=> catalogo.modelo.toUpperCase().includes(palabraClave))
 
    if(resultado.length > 0){
       console.table(resultado)
    }else{
       alert("No se encontro ninguna coincidencia con: ",palabraClave)
    }
   }
   function agregarProducto(){
    let ID = parseInt(prompt("Ingresa el ID del producto").trim());
    let modelo = prompt("Ingresa el nombre del producto: ").trim();
    let importe = parseFloat(prompt("Ingresa el precio del producto: "));
    let stock = parseInt(prompt("Ingresa el stock del producto: "));
 
    if (isNaN(ID) || isNaN(importe) || isNaN(stock)  ||  modelo === ""){
       alert("Por favor ingresa valores válidos.");
       return; //SI no pongo que retorne, me guarda el producto como NaN
    }
    let catalogo = new Catalogo(ID, modelo, importe, stock);
    /*
    Si los valores son válidos, creamos un objeto producto
    con los valores ingresados
    y se verifica si ese producto ya existe en la lista utilizando el método some.
    */
   if (lista.some((p) => p.modelo===catalogo.modelo)){
    alert("El producto ya existe en la lista.");
    return;
   } 
   lista.push(catalogo);
   console.table(lista);
   }
function carrito(id,lista){
    let carr= new Catalogo(lista[id].ID,lista[id].modelo,lista[id].importe,lista[id].stock)
        lista1.push(carr)
        return lista1
}

