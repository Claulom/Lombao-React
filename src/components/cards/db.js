export const articulo = [

{
    
        id: 1,
        name: "Zapatillas",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 2,
        name: "Mochila",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
   
},
{
    
        id: 3,
        name: "Campera",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 4,
        name: "Botas",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 5,
        name: "Reloj",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 6,
        name: "Buzo",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 7,
        name: "Short",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 8,
        name: "Pollera",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 9,
        name: "Musculosa",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 10,
        name: "Gorra",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 11,
        name: "Cinturon",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 12,
        name: "Camisa",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 13,
        name: "Bolso",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 14,
        name: "Billetera",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
{
    
        id: 15,
        name: "Riñonera",
        price: 15000,
        desciption: "Descripcion del producto",
        stock: 500,
        img: "https://picsum.photos/200"
    
},
]

export function getArticulos() {
    return new Promise((resolve, reject) =>{
        setTimeout (() => resolve(articulo), 2000);
    });
};