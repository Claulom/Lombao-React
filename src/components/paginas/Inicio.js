import React from 'react'
import {useState,useEffect} from 'react'
import Auth from "../Autenticacion/Auth"
import Productos from './Productos';
import firebase from 'firebase/app'
require('firebase/auth')

const Inicio = () => {
    const [usuario, setUsuario] = useState("false")

    //previniendo que al refrescar la pagina, se pierda la sesion
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((usuarioFirebase)=>{
           console.log("Ya tiene sesión iniciada", usuarioFirebase) 
            setUsuario(usuarioFirebase)
        })
    }, [])

    return (
        <div>
            <h1>Bienvenidos a CoolStore</h1>
            {usuario ? <Productos/> : <Auth setUsuario={setUsuario}/>}
        </div>
    )
}

export default Inicio

/* const db = getFirestore()
const collection = db.collection("Productos")

const crearProductoFirebase = () =>{
    Productos.forEach((product)=>{
        collection
        .add(product)
        .then((res) => console.log("Producto agregado:", res.id))
        .catch((err) => console.log("Error", err))
        
    }) 
<button onClick={crearProductoFirebase}>Agregar producto</button>
<p></p> 
}*/
 
    /* const Productos = [ 
         
        { 
            name: "Zapatillas", 
            price: 15000, 
            stock: 80, 
            description: "Zapatillas de tela y goma en varios colores y talles",  
            img: "https://http2.mlstatic.com/D_NQ_NP_953171-MLA46975697678_082021-O.webp",
            categoryId: 1
        },
        { 
            name: "Remeras", 
            price: 3000, 
            stock: 200, 
            description: "Remeras de algodón, todos los talles y colores",  
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_629378-MLA48278409192_112021-F.webp", 
            categoryId: 2
        },
        {
            name: "Camperas", 
            price: 10000, 
            stock: 150, 
            description: "Camperas de Cuero, Jean y Lona, para todos los días",  
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_767849-MLA47359387303_092021-F.webp", 
            categoryId: 2
        },
        { 
            name: "Jeans", 
            price: 12000, 
            stock: 120, 
            description: "Jeans de todos los colores y talles",  
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_752847-MLA41849266095_052020-F.webp", 
            categoryId: 2
        },
        { 
            name: "Bermudas", 
            price: 8000, 
            stock: 100, 
            description: "Bermudas de Jean, Algodon y Gabardina todos los colores y talles", 
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_849893-MLA43681293869_102020-F.webp",
            categoryId:2
        },
        { 
            name: "Relojes", 
            price: 4000, 
            stock: 30, 
            description: "Relojes deportivos unisex",  
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_867297-MLA47221994979_082021-F.webp",
            categoryId: 3
        },
    
        { 
            name: "Cinturones", 
            price: 3000, 
            stock: 40, 
            description: "Cinturones de Cuero y Tela con varios motivos y detalles",  
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_643898-MLA45317097218_032021-F.webp",
            categoryId: 3
        },
        { 
            name: "Polleras", 
            price: 3000, 
            stock: 60, 
            description: "Polleras de todos los colores y talles",  
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_669306-MLA48692115883_122021-F.webp", 
            categoryId: 2
        },
        { 
            name: "Gorras", 
            price: 9600, 
            stock: 120, 
            description: "Gorras con varios diseños",  
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_950499-MLA48991618237_022022-F.webp",
            categoryId: 3
        },
        { 
            name: "Bolsos", 
            price: 6500, 
            stock: 70, 
            description: "Mochilas y bolsos para todos los días", 
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_954141-MLA45333825013_032021-F.webp", 
            categoryId: 5
        },
        { 
            name: "Carteras", 
            price: 5000, 
            stock: 50, 
            description: "Carteras de mujer de todos los materiales y colores", 
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_707113-MLA47727869115_102021-F.webp",
            categoryId: 5
        },
    
        { 
            name: "Perfumes", 
            price: 16000, 
            stock: 100, 
            description: "Perfumeria unisex", 
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_886259-MLA47614176538_092021-F.webp",
            categoryId: 4
        },
        { 
            name: "Bijouteri", 
            price: 1000, 
            stock: 100, 
            description: "Accesorios de acero quirurjico y enchapados oro y plata", 
            img: "https://http2.mlstatic.com/D_NQ_NP_636680-MLA46521025653_062021-O.webp", 
            categoryId: 3
        },
        { 
            name: "Billeteras", 
            price: 7500, 
            stock: 150, 
            description: "Billeteras de cuero y tela", 
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_774854-MLA42155103676_062020-F.webp",
            categoryId: 3
        },
        { 
            name: "Anteojos", 
            price: 18500, 
            stock: 120, 
            description: "Anteojos de sol Ray-Ban Highstreet Chris Standard con marco de nailon color matte black, lente grey de cristal degradada, varilla matte black de acero/titanio - RB4187", 
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_920114-MLA48700484011_122021-F.webp",
            categoryId: 3
        }
    ]
     */