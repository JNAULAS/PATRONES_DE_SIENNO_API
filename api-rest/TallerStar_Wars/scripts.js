const API = 'https://swapi.dev/api/people/'

// 3. Retorna parte visual
function pintaPersonaje(id, list) {
    let div = document.createElement('div')
    let h1_id = document.createTextNode('Codigo: '+ id + ' Nombre: ' + list.name)
    let h1 = document.createElement('h1')
    h1.appendChild(h1_id)
    div.appendChild(h1)

    // Pintado
    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild(div)
}

// 2 Consume Servicio
async function obtener_personaje(id) {
    try {
        let response = await fetch(`${API}${id}`)
        return pintaPersonaje(id,await response.json())
    } catch (error) {
        console.error(`[error]: ${error}`)
    }
}

// 1 Recorre bucle
for (let i = 1; i <= 3; i++) {
    obtener_personaje(i)
}