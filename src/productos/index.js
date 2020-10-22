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
    precio:25000,
    imagen: canasticaImg,
    opcion1: [
        {nombre:'FRESAS CON NUTELLA',cantidad:1},
        {nombre:'PAQUETICOS DE DULCE',cantidad:1},
        {nombre:'CHOCOLATINA',cantidad:1},
        {nombre:'CERVEZA CORONITA',cantidad:1},
        {nombre:'CORONITA',cantidad:1}
    ]
}
const canastaEcono={
    id : 'Canasta-Econo',
    nombre : 'CANASTA ECONO',
    precio:35000,
    imagen: canastaEconoImg,
    imagen2 : canastaEcono2Img,
    opcion1: [
        {nombre:'SANDWICH',cantidad:1},
        {nombre:'BANANO CON NUTELA',cantidad:1},
        {nombre:'MANI',cantidad:1},
        {nombre:'YOGURT',cantidad:1},
        {nombre:'DULCES',cantidad:1},
        {nombre:'LETRERO',cantidad:1}
    ],
    opcion2:[
        {nombre:'SANDWICH',cantidad:1},
        {nombre:'BANANO CON NUTELA',cantidad:1},
        {nombre:'MANI',cantidad:1},
        {nombre:'JUGO',cantidad:1},
        {nombre:'GLOBO METALIZADO',cantidad:1}
    ]
}
const desayunoMeSA={
    id :'Desayuno-Mesa1',
    nombre : 'DESAYUNO MESA 1',
    precio:65000,
    imagen: DesayunoMesaImg,
    imagen2:DesayunoMesaOpcion2Img,
    opcion1: [
        {nombre:'PARTFAIT',cantidad:1},
        {nombre:'GALLETAS',cantidad:1},
        {nombre:'SANDWICH',cantidad:1},
        {nombre:'ROSAS',cantidad:3},
        {nombre:'MANI',cantidad:1},
        {nombre:'DULCES',cantidad:1},
        {nombre:'JUGO',cantidad:1},
        {nombre:'GLOBO BURBUJA',cantidad:1},
    ],
    opcion2: [
        {nombre:'PARTFAIT',cantidad:1},
        {nombre:'SANDWICH',cantidad:1},
        {nombre:'DULCES',cantidad:1},
        {nombre:'JUGO',cantidad:1},
        {nombre:'PELUCHE',cantidad:1},
        {nombre:'GLOBO METALIZADO',cantidad:1},
    ]
}
const desayunoMeSA2={
    id : 'Desayuno-Mesa2',
    nombre : 'DESAYUNO MESA 2',
    precio:70000,
    imagen: DesayunoMesaOpcion22Img,
    imagen2:DesayunoMesa2Img,
    opcion1: [
        {nombre:'PELUCHE',cantidad:1},
        {nombre:'GALLETAS',cantidad:1},
        {nombre:'SANDWICH',cantidad:1},
        {nombre:'JET CREMA',cantidad:1},
        {nombre:'MANI',cantidad:1},
        {nombre:'DULCES',cantidad:1},
        {nombre:'JUGO',cantidad:1},
        {nombre:'GLOBOS',cantidad:1},
        {nombre:"BANDERIN",cantidad:1},
    ],
    opcion2: [
        {nombre:'PELUCHE',cantidad:1},
        {nombre:'GALLETAS',cantidad:1},
        {nombre:'SANDWICH',cantidad:1},
        {nombre:'FLORES',cantidad:1},
        {nombre:'PARTFAIT',cantidad:1},
        {nombre:'JUGO',cantidad:1},
        {nombre:'GLOBO',cantidad:1},
        {nombre:'DULCES',cantidad:1}
    ]
}
const desayunoCanasta={
    id : 'Desayuno-Canasta',
    nombre : 'DESAYUNO CANASTA',
    precio:75000,
    imagen: DesayunoCanastaImg,
    opcion1: [
        {nombre:'CORONITAS',cantidad:2},
        {nombre:'MANI',cantidad:1},
        {nombre:'SANDWICH',cantidad:1},
        {nombre:'DULCES',cantidad:1},
        {nombre:'PAPAS PRINGLES',cantidad:1},
        {nombre:'JUGO',cantidad:1},
        {nombre:'GLOBO BURBUJA DECORADO',cantidad:1},
        {nombre:'BANDERIN',cantidad:1},
    ]
}
const desayunoGrande={
    id : 'Desayuno-Mesa-Grande',
    nombre : 'DESAYUNO MESA GRANDE',
    precio:80000,
    imagen: DesayunoGrandeImg,
    imagen2:DesayunoGrande2Img,
    opcion1: [
        {nombre:'PARFAIT',cantidad:1},
        {nombre:'CERVEZAS CORONITAS',cantidad:2},
        {nombre:'SANDWICH',cantidad:1},
        {nombre:'GALLETAS',cantidad:1},
        {nombre:'FRUTA',cantidad:1},
        {nombre:'MANI',cantidad:1},
        {nombre:'GIRASOL',cantidad:1},
        {nombre:'JUGO',cantidad:1},
        {nombre:'GLOBOS',cantidad:1},
    ],
    opcion2: [
        {nombre:'PARTFAIT',cantidad:1},
        {nombre:'CERVEZAS CORONITAS',cantidad:2},
        {nombre:'SANDWICH',cantidad:1},
        {nombre:'FRUTA',cantidad:1},
        {nombre:'DULCES',cantidad:1},
        {nombre:'JET CREMA',cantidad:1},
        {nombre:'MANI',cantidad:1},
        {nombre:'LETRERO',cantidad:1},
    ]
}
const Products = [
canastica,canastaEcono,desayunoMeSA,desayunoMeSA2,desayunoCanasta,desayunoGrande
]
export default Products;