const productos = [
    {
        id:'1',
        category:'Remeras',
        title:'Remera',
        modelo:'1978',
        img:'/multimedia/1978.jpg',
        price:'200',
        stock:'5'   ,
        detail:'Remera oficial de la selección argentina utilizada en el mundial de 1978.'
    },
    {
        id:'2',
        category:'Remeras',
        title:'Remera',
        modelo:'1986',
        img:'/multimedia/1986.webp'
        ,price:'300'
        ,stock:'8'  ,
        detail:'Remera oficial de la selección argentina utilizada en el mundial de 1986.'
    },
    {
        id:'3',
        category:'Remeras',
        title:'Remera',
        modelo:'2022',
        img:'/multimedia/2022.webp',
        price:'1500',
        stock:'10',
        detail:'Remera oficial de la selección argentina utilizada en el mundial de 2022.'
    },
    {
        id:'4',
        category:'Pantalones',
        title:'Short',
        modelo:'1994',
        img:'/multimedia/short1994.webp',
        price:'7000',
        stock:'6',
        detail:'Short oficial de la seleccion argentina 1994.'
    },
    {
        id:'5',
        category:'Pantalones',
        title:'Short',
        modelo:'1994',
        img:'/multimedia/shortarquero2022.webp',
        price:'7000',
        stock:'15',
        detail:'Short Arquero oficial de la seleccion argentina 2022.'
    },  
    {
        id:'6',
        category:'Remeras',
        title:'Remera',
        modelo:'2022',
        img:'/multimedia/Suplente2022.webp',
        price:'7000',
        stock:'30',
        detail:'Remera alternativa oficial de la seleccion argentina 2022.'
    },  
    ]

const obtenerProductos = () => {

    return new Promise ((resolve, reject)=>{
            let error = false; 

        setTimeout(() =>{
            if(error){
                reject('acceso denegado')
            } else{
                resolve(productos)
            }
        }, 2000)
        
    })
}

const getProducto = (id) => {

    return new Promise ((resolve, reject)=>{
           const finded = productos.find((item)=>{return(item.id === id)})
            let error = false; 

        setTimeout(() =>{
            if(error){
                reject('No se encontró el producto')
            } else{
                resolve(finded)
            }
        }, 2000)
        
    })
}

const getProductoByCategory = (categoryUrl) => {

    return new Promise ((resolve, reject)=>{
           let filter = productos.filter((item)=>item.category === categoryUrl)
            let error = false; 

        setTimeout(() =>{
            if(error){
                reject('No se encontró el producto')
            } else{
                resolve(filter)
            }
        }, 2000)
        
    })
}




export default obtenerProductos;

export {getProducto, getProductoByCategory}