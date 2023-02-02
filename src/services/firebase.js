
import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore, doc, query, where } from 'firebase/firestore';


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

export default db;