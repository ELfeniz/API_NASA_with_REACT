import { useEffect, useState } from 'react';
import * as Function from './Functions';

import { Listimg } from './Listimg';
import { Form } from '../Form';
import { Paginator } from '../Paginator';


export const NasaList = () => {

    const [rut, setrut] = useState([]);


    const peticion = async ( page=1  ) => {


        const rel = await Function.Get_images({page});
        const data = await rel.json();
        console.log(data);
        // const rut_img1 = data.collection.items[5].links[0].href;
        const rut_name = data.collection.items[5].data[0].title;
        console.log(rut_name);
        setrut(data.collection.items);
    }



    const busqueda = async ( busq="" ) => {

        const busq2 = busq.trim();
        console.log("busqueda", busq2);
        const rel = await Function.Search_images({busq2});
        const data = await rel.json();
        console.log(data);
        // const rut_img1 = data.collection.items[5].links[0].href;
        setrut(data.collection.items);
    }


    useEffect(() => {

        peticion();

    }, [])

    return (

<div >

    <div style={{ backgroundImage:`url("https://conceptoabc.com/wp-content/uploads/2021/12/Universo.jpg")`, height:"360px"}}>
      <div className='container contenedor_text'>
        <h2 className='container text_nasa' >NASA Image and
        Video Library</h2>
      </div>
        <img className="logo_nasa" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png' />
        
        <Form busqueda={busqueda} peticion={peticion}/>
        
    </div>

    <div className='container my-4'>  { /* Ponemos margenes laterales de 4  */}
            <div className='row'>   { /* Alinear todo por filas */}
                {rut.map((data, key)=> (
                    <Listimg key={key} rut={data}  />   
                ))}
            </div>
    </div>

    <Paginator peticion={peticion} />
</div>
    )
}