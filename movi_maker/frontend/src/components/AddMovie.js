import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const AddMovie = () => {
    return (
        // Se agrega id para poder se enlazado desde el boton de otro componente
        <div className='addMovie' id='addmovie'>
            <form>
                <input type='text' placeholder='Movie name' required ></input>
                <input type='text' placeholder='Movie Genero' required ></input>
                <input type='text' placeholder='Movie Year' ></input>
                <button>Add Movie</button>
            </form>
            <div className='top'>
                <Link smooth to='#header' className=''>Back to top</Link>
            </div>
        </div>
    )
}
export default AddMovie