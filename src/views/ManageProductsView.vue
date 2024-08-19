<template>
    <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold mb-6">Create New Product</h1>
        
        <!-- Product Form -->
        <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium mb-2">Product Name</label>
                <input id="name" v-model="product.name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>

            <div class="mb-4">
                <label for="price" class="block text-gray-700 font-medium mb-2">Price (฿)</label>
                <input id="price" v-model="product.price" type="number" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>

            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-medium mb-2">Description</label>
                <textarea id="description" v-model="product.description" class="w-full px-3 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
            </div>

            <div class="mb-4">
                <label for="effects" class="block text-gray-700 font-medium mb-2">Effects (Comma Separated)</label>
                <input id="effects" v-model="product.effects" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" />
                <p class="text-gray-500 text-sm mt-1">Enter effects separated by commas (e.g., "Anti-aging, Hydrating")</p>
            </div>

            <div class="mb-4">
                <label for="stocked" class="inline-flex items-center">
                    <input id="stocked" v-model="product.stocked" type="checkbox" class="form-checkbox" />
                    <span class="ml-2 text-gray-700">In Stock</span>
                </label>
            </div>

            <div class="mb-4">
                <label for="stock" class="block text-gray-700 font-medium mb-2">Stock Quantity</label>
                <input id="stock" v-model="product.stock" type="number" class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <div class="mb-4">
                <label for="image" class="block text-gray-700 font-medium mb-2">Image URL</label>
                <input id="image" v-model="product.image" type="url" class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Create Product
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import productService from '@/services/productService.js'; // Ensure to import your service

const product = ref({
    name: '',
    price: '',
    description: '',
    effects: '',
    stocked: false,
    stock: '',
    image: ''
});

const handleSubmit = async () => {
    try {
        const effectsArray = product.value.effects.split(',').map(effect => effect.trim());
        const newProduct = {
            ...product.value,
            effects: effectsArray
        };
        await productService.addProduct(newProduct);
        // Optionally, reset the form after submission
        product.value = {
            name: '',
            price: '',
            description: '',
            effects: '',
            stocked: false,
            stock: '',
            image: ''
        };
        alert('Product created successfully!');
    } catch (error) {
        console.error('Error creating product:', error);
    }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
