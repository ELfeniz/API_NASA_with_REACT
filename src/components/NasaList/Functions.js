import PropTypes from 'prop-types';

export const Get_images = async({ page }) =>{

    const fecha = 2015;
    const URL = "https://images-api.nasa.gov/search?year_start=";

    const rel = await fetch(`${URL}${fecha}&page=${page}`);

    console.log(rel);

    return rel

}

Search_images.prototype ={
    busq2: PropTypes.string
};

export async function Search_images  ({ busq2 }) {

    const URL = "https://images-api.nasa.gov/search?title=";
    console.log("busq2", busq2);

    const rel = await fetch(URL+busq2);

    console.log(rel);

    return rel

}