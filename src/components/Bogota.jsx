import React from 'react'


const Bogota = () => {

    React.useEffect(() => {

        var url = 'http://localhost:53535/api/historial';
        var data = {Ciudad: 'Bogota D.C', Info: 'Noticias' };
    
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    
        }, [])

    const [noticias, setnoticias] = React.useState([])

    React.useEffect (() => {
        obtenernoticias()
    }, [])

    const obtenernoticias = async () => {                              
        const data = await fetch('http://localhost:53535/api/bogota')  // Se transforman los datos en json
        const bogota = await data.json()
        setnoticias(bogota)
    }

    const [clima, setclima] = React.useState([])

    React.useEffect (() => {
        obtenerclima()
    }, [])

    const obtenerclima = async () => {                              
        const data = await fetch('http://localhost:53535/api/bogota/getclima')  // Se transforman los datos en json
        const bogotaclima = await data.json()
        setclima(bogotaclima)
    }

    return ( 
        <div>
            <h1 className='container-fluid'>Información de Bogotá D.C</h1>

            <ul>
                {
                     noticias.map(item => (
                        <li key={item.IDInfo}>{item.Fecha} - {item.Titulo} - {item.Autor} - {item.Descripcion}</li>
                     ))
                }
            </ul>
            <hr />
            <h1 className='container-fluid'> Clima en Bogotá D.C </h1>
            <ul>
                {
                     clima.map(item => (
                        <li key={item.ID}>{item.Temperatura} Grados - {item.Descripcion}</li>
                     ))
                }
            </ul>

        </div>
     );
}
 
export default Bogota;