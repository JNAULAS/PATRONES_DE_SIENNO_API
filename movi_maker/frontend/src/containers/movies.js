import React from 'react';
import SingleMovie from '../components/SingleMovie';
const movies = [
    {name:'Rambo', genero: 'Action',year:2019},
    {name:'Rambo1', genero: 'Action',year:2020},
    {name:'Rambo2', genero: 'Action',year:2021},
    {name:'Rambo3', genero: 'Action',year:2022}
]

const Movies = () =>{

return(
    <div className='footer'>
    {
        movies.map((data) => {
            return <SingleMovie name={data.name} genero={data.genero + ' '+data.year}/>
        })
    }
    </div>
)
}
export default Movies