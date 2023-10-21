import React from 'react';
import { useMutation, useQuery } from "react-query";
import { HashLink as Link } from 'react-router-hash-link';

const AddMovie = () => {
  // Hooks state
  const urlApi = 'http://localhost:4003/graphql'

  // Function
  const mutation = useMutation((newMovieData) => {
    // Obtiene data de entrada
    const movieName = document.getElementById('idNombre').value;
    const movieGenero = parseFloat(document.getElementById('idGenero').value);
    const movieYear = parseFloat(document.getElementById('idYear').value);
    return fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          mutation {
            addMovies(name: "${movieName}", genero: ${movieGenero}, year: ${movieYear}) {
              id
              name
              genero,
              year
            }
          }
        `,
      }),
    }) .then((response) => {
      if (response.status >= 400) {
        throw new Error('Error creating movie');
      } else {
        return response.json();
      }
    })
    .then((data) => data.data.createMovie);

  })

  // Ejecuta funcion para consultar
  const { data, isLoading, error } = useQuery("launches", () => {
    return fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
                  {
                    listMovies {
                      id
                      name
                      genero
                      year
                    }
                  }
                `,
      })
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error("Error fetching data");
      } else {
        console.log('Data de retorno')
        console.log(response.json())
        return response.json();
      }
    })
      .then((data) => data.data);

  })

  // View
  return (
    // Se agrega id para poder se enlazado desde el boton de otro componente
    <div className='addMovie' id='addmovie'>
      <form>
        <input type='text' id='idNombre' placeholder='Movie name' required ></input>
        <input type='text' id='idGenero' placeholder='Movie Genero' required ></input>
        <input type='text' id='idYear' placeholder='Movie Year' ></input>
        <button>Add Movie</button>
      </form>
      <div className='top'>
        <Link smooth to='#header' className='top-button'>Back to top</Link>
      </div>
    </div>
  )
}
export default AddMovie