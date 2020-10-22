import imgprueba from '../img/canastica.png'
const gomas = {
    nombre : 'gomas',
    adicionales : [
        {id:1,nombre:'grisli',precio:1000}
    ]
}
const Cervezas = {
    nombre : 'cervezas',
    adicionales : [
        {id:1,nombre:'corona',precio:4000,imagen:imgprueba},
        {id:2,nombre:'poker',precio:2300,imagen:imgprueba}
    ]
}
const chocolates = {
    nombre : 'chocolates',
    adicionales : [
        {id:1,nombre:'jumbos',precio:1500,imagen:imgprueba},
        {id:2,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:3,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:4,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:5,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:6,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:7,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:8,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:9,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:10,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:11,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:12,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:13,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:14,nombre:'jumbo',precio:1000,imagen:imgprueba},
        {id:15,nombre:'jumbo',precio:1000,imagen:imgprueba}
    ]
}

const Adicionales = [chocolates,gomas,Cervezas]
export default Adicionales;