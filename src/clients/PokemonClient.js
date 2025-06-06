import axios from "axios";

const consumirApi = async () => {
    const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    return respuesta.data;
}

export const consumirAPIFachada= async () =>{
    return await consumirApi();
}