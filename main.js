alert("Bienvenido a HgBiomedics, Por favor inicie sesión")
let intentos=1
let restantes=3
let identificar=true
do{
    let usuario= prompt("ingresa tu usuario")
    let pass= prompt("ingresa tu contraseña, solo tienes: " + restantes + " intentos")
    if(usuario===null){
        break
    }
    if(pass===null){
        break
    }
    if(usuario==="Hakin" && intentos <=3 && pass==="12345")
    {
        alert("bienvenido " +usuario)
        identificar=false
    }else{
        alert("No se reconoce el usuario: " + usuario + ", O la contraseña introducida no es la correcta")
        intentos++
        restantes--
        if(intentos>3){
            alert("Ya no es posible ingresar, supero los 3 intentos ")
            console.error("no hay mas intentos")
            break
        }
    }
} while(identificar)
 
let iva=1.16
function Catalogo(ID,modelo,importe,stock){
    this.ID=ID
    this.modelo=modelo
    this.importe=importe
    this.stock=stock
    this.importeCiva=function(){
        return this.importe*iva
    }
    
}
const producto1 = new Catalogo(1,"Cámara 1488HD Stryker",150000,4)
const producto2 = new Catalogo(2,"Cámara IM8000 TrueHD Conmed",100000,2)
const producto3 = new Catalogo(3,"MONITOR SIGNOS VITALES MOD. UMEC10 MINDRAY",20000,10)
const producto4 = new Catalogo(4,"Monitor LED 4K Sony Medical",15000,4)

let servicio= prompt("¿Qué servicio requiere? Si desea adquirir algún equipo, escriba 1. Si requiere servicio de mantenimiento, escriba 2. Si necesita salir, presione cancelar")
servicio = parseInt(servicio)
if(servicio===1){
    let total=0;
    let iterar=true;
    while(iterar===true){
        const prod=prompt("Estos son nuestros productos en venta, ¿Desea agregar alguno al carrito? Escriba el ID en el cuadro de busqueda " + producto1.ID  + " ID " + producto1.modelo+ " $"+ producto1.importeCiva()+"MXN --- "+ producto2.ID  + " ID " + producto2.modelo+ " $"+ producto2.importeCiva()+"MXN --- "+ producto3.ID  + " ID " + producto3.modelo+ " $"+ producto3.importeCiva()+"MXN --- "+ producto4.ID  + " ID " + producto4.modelo+ " $"+ producto4.importeCiva()+"MXN --- ")
        switch(prod){
            case "1":
                alert("Tenemos en stock: "+producto1.stock)
                confirme=confirm("¿Agregar al carrito?")
                if(confirme===true && producto1.stock!=0){
                    producto1.stock=parseInt(producto1.stock)-1;
                    const precio=parseInt(producto1.importeCiva())
                    total =total+precio
                } else { break;}
            break;
            case "2":
                alert("Tenemos en stock: "+producto2.stock)
                confirme=confirm("¿Agregar al carrito?")
                if(confirme===true && producto2.stock!=0){
                    producto2.stock=parseInt(producto2.stock)-1;
                    const precio=parseInt(producto2.importeCiva())
                    total=total+precio
                } else { break;}
            break;
            case "3":
                alert("Tenemos en stock: "+producto3.stock)
                confirme=confirm("¿Agregar al carrito?")
                if(confirme===true && producto3.stock!=0){
                    producto3.stock=parseInt(producto3.stock)-1;
                    const precio=parseInt(producto3.importeCiva())
                    total =total+precio
                } else { break;}
            break;
            case "4":
                alert("Tenemos en stock: "+producto4.stock)
                confirme=confirm("¿Agregar al carrito?")
                if(confirme===true && producto4.stock!=0){
                    producto4.stock=parseInt(producto4.stock)-1;
                    const precio=parseInt(producto4.importeCiva())
                    total =total+precio
                } else { break;}
                break;
                                
            default: 
            alert("Ese producto no está en nuestro cátalogo")
            break;
        }
        iterar=confirm("¿Desea agregar otro objeto a su carrito?")
        
        
    }
    let comprar=confirm("Quieres proceder a la compra")
    if(comprar===true){
        alert("El precio a pagar es de: $"+ total + " MXN")
        alert("Gracias por su compra")
        } else{
            let cancelar=confirm("¿Quiere cancelar la compra?")
            if(cancelar===true){
                Alert("Que tenga un lindo día!")
            }
        } 
    
}