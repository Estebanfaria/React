import { initializeApp } from "firebase/app";
import { addDoc ,collection, getDoc, getDocs, getFirestore, doc, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCS-hLYFZ-JVD5iWXMmDl-WSQkr2-QJCUg",
  authDomain: "reactapp34855.firebaseapp.com",
  projectId: "reactapp34855",
  storageBucket: "reactapp34855.appspot.com",
  messagingSenderId: "545176553273",
  appId: "1:545176553273:web:f9c976300ade7ef6504ae8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function obtenerProductos(){
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef)
    const productos = snapshot.docs.map((item)=>{
        let producto = item.data()
        producto.id = item.id
        return producto    
    })
    return(productos);}

export async function getProducto(idParams){
    const productsRef = collection(db, 'products');
    const docRef = doc(productsRef, idParams);
    const snapshot = await getDoc(docRef);
    return {...snapshot.data(), id:snapshot.id}
}    

export async function getProductoByCategory(categoryUrl){
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where('category', '==', categoryUrl))
    const snapshot = await getDocs(q)
    const productos = snapshot.docs.map((item)=>{
        let producto = item.data()
        producto.id = item.id
        return producto
    });
    return(productos);
}

export async function createOrder(order){
    const orderRef = collection(db, 'order')
    let respuesta = await addDoc(orderRef, order);
    return respuesta.id      
}

export async function exportArray(){
    const products = [
        {
            id:'1',
            category:'Remeras',
            title:'Remera',
            modelo:'1978',
            img:'/multimedia/1978.jpg',
            price:15000,
            stock:5 ,
            detail:'Remera oficial de la selección argentina utilizada en el mundial de 1978.'
        },
        {
            id:'2',
            category:'Remeras',
            title:'Remera',
            modelo:'1986',
            img:'/multimedia/1986.webp',
            price:30000,
            stock:8  ,
            detail:'Remera oficial de la selección argentina utilizada en el mundial de 1986.'
        },
        {
            id:'3',
            category:'Remeras',
            title:'Remera',
            modelo:'2022',
            img:'/multimedia/2022.webp',
            price:15000,
            stock:10,
            detail:'Remera oficial de la selección argentina utilizada en el mundial de 2022.'
        },
        {
            id:'4',
            category:'Pantalones',
            title:'Short',
            modelo:'1994',
            img:'/multimedia/short1994.webp',
            price:7000,
            stock:6,
            detail:'Short oficial de la seleccion argentina 1994.'
        },
        {
            id:'5',
            category:'Pantalones',
            title:'Short',
            modelo:'1994',
            img:'/multimedia/shortarquero2022.webp',
            price:7000,
            stock:15,
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
    for (let product of products ){
        delete(product.id)
        addDoc(collection(db, 'products'), product);
    }
    
}

export default db;