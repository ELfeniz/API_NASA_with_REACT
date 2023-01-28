

export const Listimg = ({ rut }) => {


    return (

        <div className="col-md-4 ">   {/* creamos 4 columnas con boostrap*/}


            <div className="card" style={{ width: "300px" }}>
                <img src={rut.links[0].href} className="card-img-top" alt="..."  style={{ width: "300px",  height:"200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{rut.data[0].title}</h5>
                    <p className="card-text">{rut.data[0].description_508}</p>
                </div>
            </div>

        </div>
    )

}