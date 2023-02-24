import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import Title from "../Title/title";
import { useParams } from "react-router-dom";


const films = [
    { id: 1, image: "https://www.primevideo.com/detail/Transformers-3/0PQJLYO07SEDLT8ATD72W5RRN8/ref=atv_nb_lcl_es_ES?ie=UTF8&language=es_ES", category: "films", title: "Transformers 3" },
    { id: 2, image: "https://www.youtube.com/watch?v=OCDhMOrCEoc", category: 'films', title: "La Vieja Guardia" },
    { id: 3, image: "https://www.netflix.com/ar/title/80131552", category: 'films', title: "Jhon Wick 2" },
    { id: 4, image: "https://www.primevideo.com/detail/Transformers-3/0PQJLYO07SEDLT8ATD72W5RRN8/ref=atv_nb_lcl_es_ES?ie=UTF8&language=es_ES", category: "Series", title: "GOT" },
    { id: 5, image: "https://www.youtube.com/watch?v=OCDhMOrCEoc", category: 'Series', title: "yelowston" },
    { id: 6, image: "https://www.netflix.com/ar/title/80131552", category: 'Series', title: "vikingos" },
];

export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);


    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 2000);
        });

        if (categoriaId) {
            getData.then(res => setData(res.filter(film => film.category == categoriaId)));
        } else {
            getData.then(res => setData(res));
        }

        getData.then(res => setData(res));
    }, [categoriaId])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity}`);
    }
    return (

        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>



    );


}

export default ItemListContainer;