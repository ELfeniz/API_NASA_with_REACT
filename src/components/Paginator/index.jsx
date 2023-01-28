import { useState } from "react";

export const Paginator = ( {peticion} ) => {

    const [page, setpage] = useState(1);

    const next = () =>{

      if (page<11){
        let aux = page + 1;
        setpage(aux);
        console.log(aux);
        peticion(aux);
      }
    }

    const previus = () =>{
        if (page > 1){
            let aux = page - 1;
            setpage(aux);
            console.log(aux);
            peticion(aux);
        }

    }

    const uno = () =>{
            let aux = 1
            setpage(aux);
            console.log(aux);
            peticion(aux);

    }

    const dos = () =>{
            let aux = 2
            setpage(aux);
            console.log(aux);
            peticion(aux);

    }

    const tres = () =>{
            let aux = 3
            setpage(aux);
            console.log(aux);
            peticion(aux);

    }


  return (

    <div className="paginator  my-4 ">   { /* my-4 margen en y  */}

        <button disabled={isFirstPage(page)} className="btn btn-success" style={{margin:"4px"}} onClick={()=> previus()}>
            Previous
        </button>
        <button className="btn btn-primary" style={{margin:"1px"}} onClick={()=>uno()}>
            1
        </button>
        <button className="btn btn-primary" style={{margin:"1px"}} onClick={()=>dos()}>
            2
        </button>
        <button className="btn btn-primary" style={{margin:"1px"}} onClick={()=> tres()}>
            3
        </button>
        <button disabled={endPage(page)} className="btn btn-danger" style={{margin:"4px"}} onClick={() => next()}>
            Next
        </button>

    </div>

  );
};


function isFirstPage(currentPage) {
  return currentPage === 1;
}


function endPage(currentPage) {
  return currentPage === 11;           // (===) revisa si dos operandos son iguales y produce un resultado Booleano
}