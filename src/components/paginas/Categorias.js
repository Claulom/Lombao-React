import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getFirestore} from '../../firebase'
import {ItemCard} from "../cards/ItemCard";
 
const Categorias = () => {
    
    const [productos, setProductos] = useState();
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null)
    const {categoryId} = useParams()
    console.log(productos)

    const getId= async (categoryId) =>{
        const db =  getFirestore();
        if (categoryId){
            let productsCollection =[];
            productsCollection = db.collection('Productos').where('categoryId', '==', Number(categoryId))
            const response = await productsCollection.get()
            if (response.empty)  {
                console.log("No hay productos")
                return;
            }
            setProductos(response.docs.map((docs) => ({ ...docs.data(), id: docs.id })))

        }else{
            let productsCollection = db.collection('Productos')
        }
    }
    useEffect(() => {
        getId(categoryId)
       
       /*  const getDataFromFirestore = async () => {
            setCargando(true) */
      /*   try{
    }catch(err){
        setError(err)
    }finally{
        setCargando(false)
    } */
    /* } */
       /* getDataFromFirestore();  */


    }, [categoryId]); 
    
     if (cargando) {
        return <p>Cargando productos...</p>;
    } else if (error) {
        return <p>Ha habido un error {error.message}</p>
    } else
        return (
            <div className="galeria">
                <div className="container-card-class">
                   {cargando ?
                        (<p>Cargando...</p>) :
                        (productos?.map((productos) => (<ItemCard key={productos.id} productos={productos} />)))}
                </div>
            </div>
        );
};   
export default Categorias