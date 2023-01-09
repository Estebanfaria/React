const productos = [
    {id:'1',title:'Remera',modelo:'1978',img:'/multimedia/1978.jpg',price:'200',stock:'5'   , detail:'Remera oficial de la selección argentina utilizada en el mundial de 1978.'},
    {id:'2',title:'Remera',modelo:'1986',img:'/multimedia/1986.webp',price:'300',stock:'8'  , detail:'Remera oficial de la selección argentina utilizada en el mundial de 1986.'},
    {id:'3',title:'Remera',modelo:'2022',img:'/multimedia/2022.webp',price:'1500',stock:'10', detail:'Remera oficial de la selección argentina utilizada en el mundial de 2022.'},
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

const getProducto = () => {

    return new Promise ((resolve, reject)=>{
            let error = false; 

        setTimeout(() =>{
            if(error){
                reject('acceso denegado')
            } else{
                resolve(productos[0])
            }
        }, 2000)
        
    })
}




export default obtenerProductos;

export {getProducto}