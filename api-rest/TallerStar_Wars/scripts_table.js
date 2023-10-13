const API = 'https://swapi.dev/api/people/'
let contador = 0
const listHeader = ['Código', 'Nombre']

// 3. Retorna parte visual
function pintaPersonaje(id, list) {
    // Creamos elemento tabla
    const table = document.createElement('table');

    // Recorremos la lista y agregamos a la tabla
    const tableRows = data.map(rowData => {
        // Agregamos fila
        const row = document.createElement('tr');
        if (id == 0) {
            const cells = listHeader.map(cellColumm => {
                const cell = document.createElement('td');
                cell.textContent = cellColumm;
                return cell;
            });

            // Agregamos celdas a las filas
            cells.forEach(cell => {
                row.appendChild(cell);
            });
        } else {
            const cells = rowData.map(cellData => {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                return cell;
            });

            // Agregamos celdas a las filas
            cells.forEach(cell => {
                row.appendChild(cell);
            });
        }

        return row;
    });

    // Agregamos las filas a la tabla
    tableRows.forEach(row => {
        table.appendChild(row);
    });

    // Agregamos tabla al dom
    document.body.appendChild(table);

    // Pintado
    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild(div)
}

// 2 Consume Servicio
async function obtener_personaje(id) {
    try {
        let response = await fetch(`${API}${id}`)
        return pintaPersonaje(id, await response.json())
    } catch (error) {
        console.error(`[error]: ${error}`)
    }
}

// 1 Recorre bucle
for (let i = 1; i <= 3; i++) {
    obtener_personaje(i)
}