import flat1 from "../../public/flat1.jpg"
import flat2 from "../../public/flat2.jpg"
import flat3 from "../../public/flat3.jpg"

const db_imagem = [
    { 
        id: 1,
        img: flat1,
        nome: 'LineUP Paulista',
        preco: 508,
        nota: 9,
        endereco: 'Alameda Campinas, 540',
        cidade:'São Paulo',
        estado: 'SP'
         
    },
    {
        id: 2,
        img: flat2,
        nome: 'Alameda Campinas',
        preco: 250,
        nota: 8.7,
        endereco: 'Alameda Campinas, 850',
        cidade:'São Paulo',
        estado: 'SP'
    },
    {
        id: 3,
        img: flat3,
        nome: 'Residence Paulista',
        preco: 439,
        nota: 10,
        endereco: 'Alameda Jaú, 1606',
        cidade:'São Paulo',
        estado: 'SP'
    },
];

export default db_imagem;
