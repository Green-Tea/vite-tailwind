import { db } from '@/js/firebase';
import { collection, query, where, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Get all products
const getAllProducts = async () => {
    try {
        const productsSnapshot = await getDocs(collection(db, "Products"));
        const products = productsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Get product by ID
const getProductById = async (id) => {
    try {
        const productDoc = doc(db, "Products", id);
        const productSnapshot = await getDoc(productDoc);

        if (productSnapshot.exists()) {
            return {
                id: productSnapshot.id,
                ...productSnapshot.data(),
            };
        } else {
            console.error('No such product!');
            return null;
        }
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

// Get product by name
const getProductByName = async (name) => {
    try {
        const productsRef = collection(db, "Products");
        const q = query(productsRef, where("name", "==", name));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const products = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            return products[0];
        } else {
            console.error('No products found with the given name!');
            return null;
        }
    } catch (error) {
        console.error('Error fetching product by name:', error);
        throw error;
    }
};

// Add a new product
const addProduct = async (productData) => {
    try {
        const docRef = await addDoc(collection(db, "Products"), productData);
        return docRef.id;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Update an existing product
const updateProduct = async (id, updatedData) => {
    try {
        const productDoc = doc(db, "Products", id);
        await updateDoc(productDoc, updatedData);
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

// Delete a product
const deleteProduct = async (id) => {
    try {
        const productDoc = doc(db, "Products", id);
        await deleteDoc(productDoc);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

export default {
    getAllProducts,
    getProductById,
    getProductByName,
    addProduct,
    updateProduct,
    deleteProduct,
};
