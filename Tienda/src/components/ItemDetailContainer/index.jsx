import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";


const films = 
    { id: 1, image: "https://www.primevideo.com/detail/Transformers-3/0PQJLYO07SEDLT8ATD72W5RRN8/ref=atv_nb_lcl_es_ES?ie=UTF8&language=es_ES", title: "Transformers 3" };

export const ItemDetailContainer = () => {
const [data , setData] = useState({});

useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(films);
        }, 2000); 
    });

    getData.then(res => setData(res));
}, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;