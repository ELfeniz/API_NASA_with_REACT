
import { useEffect, useState } from "react";

import * as funtion from '../NasaList/Functions'

import { AutoComplet } from "../AutoComplet";

export const Form = ( {busqueda, peticion}) => {

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)    // funcion para activar el delay
  );

const[dat, setdat] = useState();

const[ID, setID] = useState();

const[busq, setbusq] = useState('');

const [autocomplet, setautocomplet] = useState(false);

const cambio2 = (a) =>{
  setautocomplet(a);
}

const cambio = (a) =>{
  setbusq(a);
}

useEffect(() => {
  Api();
}, []); 


async function Api() {

    var totaldat = [];
    var totalID = [];

    for (var i = 1; i <= 11; i++) {     //11
      const data = await peticion2(i);
      for (var i2 = 0; i2 < 100; i2++) {
        var data3 = data.collection.items[i2].data[0].title;
        var data4 = data.collection.items[i2].data[0].nasa_id;
        totaldat = totaldat.concat(data3);
        totalID = totalID.concat(data4);
      }
    }

    setdat(totaldat);
    setID(totalID);
    console.log(totaldat);
    console.log(totalID);

}

const peticion2 = async ( page=1 ) => {

  const rel = await funtion.Get_images({page});
  const data = await rel.json();
  // const rut_img1 = data.collection.items[5].links[0].href;
  return data
}

const handleSubmit= async(e)=>{
  e.preventDefault();

  try{
        if(busq.length >0){
          console.log(busq);
          busqueda(busq);
        }
        else{
          peticion();
        }



  }catch(error){
      console.log(error);
  }

};

const cerrar = async()=> {  // funcion con delay
  await delay(200);
  setautocomplet(false)

}

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="input container mb-3 ">
          <input
            type="text"
            className="form_input form-control"
            placeholder="Search for ...(e.g. Orion)"
            value={busq} 
            onChange={(e)=> setbusq(e.target.value)}
            onClick ={()=> setautocomplet(true)}
            onBlur= {cerrar}
            />
        </div>
        <button type="submit" className="btn_input btn btn-outline-success">
          Submit
        </button>
      </form>
      <AutoComplet dat={dat} ID={ID} busq={busq} cambio={cambio} autocomplet={autocomplet} cambio2={cambio2}/>
    </div>
  );
};
