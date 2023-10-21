import React, { useEffect } from 'react';
import SingleMovie from '../components/SingleMovie';
const listMovies = [
    {name:'Rambo', genero: 'Action',year:2019},
    {name:'Rambo1', genero: 'Action',year:2020},
    {name:'Rambo2', genero: 'Action',year:2021},
    {name:'Rambo3', genero: 'Action',year:2022}
]



const Movies = () =>{
    // Inicializa los automaticos


return(
    <div className='footer'>
    {
        listMovies.map((data) => {
            return <SingleMovie key={data.id} name={data.name} genero={data.genero + ' '+data.year}/>
        })
    }
    </div>
)
}
export default Movies