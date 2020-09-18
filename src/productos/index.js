import canasticaImg from '../img/canastica.png'
import canastaEconoImg from '../img/imagen1.jpg'
import canastaEcono2Img from '../img/AnchetaPresentacion.jpeg'
import DesayunoMesaImg from '../img/DesayunoMesa.jpg'
import DesayunoMesaOpcion2Img from '../img/imagen.jpg'
import DesayunoCanastaImg from '../img/imagen4.png'
import DesayunoMesa2Img from '../img/DesayunoMesa2.jpg'
import DesayunoMesaOpcion22Img from '../img/imagen3.jpg'
import DesayunoGrandeImg from '../img/imagen2.jpg'
import DesayunoGrande2Img from '../img/imagen2.jpeg'
const canastica={
    id : 'Canastica',
    nombre : 'CANASTICA',
    precio:'25.000',
    imagen: canasticaImg,
    opcion1: [
        'FRESAS CON NUTELLA',
        'PAQUETICOS DE DULCE',
        'CHOCOLATINA',
        'CERVEZA CORONITA',
        'CORONITA'
    ]
}
const canastaEcono={
    id : 'Canasta-Econo',
    nombre : 'CANASTA ECONO',
    precio:'35.000',
    imagen: canastaEconoImg,
    imagen2 : canastaEcono2Img,
    opcion1: [
        'SANDWICH',
        'BANANO CON NUTELA',
        'MANI',
        'YOGURT',
        'DULCES',
        'LETRERO'
    ],
    opcion2:[
        'SANDWICH',
        'BANANO CON NUTELA',
        'MANI',
        'JUGO',
        'GLOBO METALIZADO'
    ]
}
const desayunoMeSA={
    id :'Desayuno-Mesa1',
    nombre : 'DESAYUNO MESA 1',
    precio:'65.000',
    imagen: DesayunoMesaImg,
    imagen2:DesayunoMesaOpcion2Img,
    opcion1: [
        'PARTFAIT',
        'GALLETAS',
        'SANDWICH',
        '3 ROSAS',
        'MANI',
        'DULCES',
        'JUGO',
        'GLOBO BURBUJA'
    ],
    opcion2: [
        'PARTFAIT',
        'SANDWICH',
        'DULCES',
        'JUGO',
        'PELUCHE',
        'GLOBO METALIZADO'
    ]
}
const desayunoMeSA2={
    id : 'Desayuno-Mesa2',
    nombre : 'DESAYUNO MESA 2',
    precio:'70.000',
    imagen: DesayunoMesaOpcion22Img,
    imagen2:DesayunoMesa2Img,
    opcion1: [
        'PELUCHE',
        'GALLETAS',
        'SANDWICH',
        'JET CREMA',
        'MANI',
        'DULCES',
        'JUGO',
        'GLOBOS',
        "BANDERIN"
    ],
    opcion2: [
        'PELUCHE',
        'GALLETAS',
        'SANDWICH',
        'FLORES',
        'PARTFAIT',
        'JUGO',
        'GLOBO',
        'DULCES'
    ]
}
const desayunoCanasta={
    id : 'Desayuno-Canasta',
    nombre : 'DESAYUNO CANASTA',
    precio:'75.000',
    imagen: DesayunoCanastaImg,
    opcion1: [
        '2 CORONITAS',
        'MANI',
        'SANDWICH',
        'DULCES',
        'PAPAS PRINGLES',
        'JUGO',
        'GLOBO BURBUJA DECORADO',
        'BANDERIN'
    ]
}
const desayunoGrande={
    id : 'Desayuno-Mesa-Grande',
    nombre : 'DESAYUNO MESA GRANDE',
    precio:'80.000',
    imagen: DesayunoGrandeImg,
    imagen2:DesayunoGrande2Img,
    opcion1: [
        'PARFAIT',
        '2 CERVEZAS CORONITAS',
        'SANDWICH',
        'GALLETAS',
        'FRUTA',
        'MANI',
        'GIRASOL',
        'JUGO',
        'GLOBOS'
    ],
    opcion2: [
        'PARTFAIT',
        '2 CERVEZAS CORONITAS',
        'SANDWICH',
        'FRUTA',
        'DULCES',
        'JET CREMA',
        'MANI',
        'LETRERO'
    ]
}
const Products = [
canastica,canastaEcono,desayunoMeSA,desayunoMeSA2,desayunoCanasta,desayunoGrande
]
export default Products;