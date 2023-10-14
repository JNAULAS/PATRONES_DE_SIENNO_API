// Funcion para crear la vista
function createView() {

    // Creamos componentes visuales
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let input = document.createElement('INPUT')

    // Creamos el conponente a ser  ingresado dentro del div
    let textH1 = document.createTextNode('Prueba')
    h1.appendChild(textH1)

    input.setAttribute('type', 'text')
    //Agregamos componentes creados al div
    div.appendChild(h1)
    div.appendChild(input)
    // Agregamos componentes al root en este caso el componente principal
    //Creamos variable del componente roor para agregar los componentes visuales
    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( div )

}
//  Funcion para llamar a la vista
createView()
