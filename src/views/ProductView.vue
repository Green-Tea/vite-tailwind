<template>
    <div class="container mx-auto px-4 py-6">
        <button @click="goBack" class="text-blue-500 hover:underline mb-4">← Back to Home</button>
        <div v-if="product.id" class="max-w-auto mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <div class="md:flex flex-1">
                <div class="md:w-1/2">
                    <img :src="product.image" alt="Product Image" class="w-full h-auto" />
                </div>
                <div class="md:w-1/2 p-4 flex flex-col justify-between">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-bold mb-4">{{ product.name }}</h1>
                        <h2 class="text-xl md:text-2xl font-bold mb-4">฿{{ product.price }}</h2>
                        <p class="mb-4">{{ product.description }}</p>
                        <div class="grid grid-cols-2 gap-4 mt-6">
                            <EffectCard
                                v-for="(effect, index) in effects"
                                :key="index"
                                :effect="effect.effect"
                                :description="effect.description"
                                :image="effect.image"
                            />
                        </div>
                    </div>
                    <!-- LINE Button -->
                    <div class="mt-6 md:w-1/2">
                        <a href="https://www.google.com" target="_blank" class="flex items-center bg-green-500 text-white text-xl px-4 py-2 rounded-md hover:bg-green-600">
                            <img src="@/assets/line.png" alt="LINE Icon" class="w-8 h-8 mr-4" />
                            <span>Order on LINE</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import productService from '@/services/productService.js';
import effectService from '@/services/effectService.js';
import EffectCard from '@/components/EffectCard.vue';

const route = useRoute();
const router = useRouter();
const product = ref({});
const effects = ref([]);

onMounted(async () => {
    try {
        const fetchedProduct = await productService.getProductById(route.params.id);

        if (fetchedProduct) {
            product.value = fetchedProduct;

            for(const effectId of product.value.effects) {
                const effect = await effectService.getEffectById(effectId);
                if (effect) {
                    effects.value.push(effect);
                } else {
                    console.error("Effect does not exist in Effects collection, or document name does not match effect name.")
                }
            }
        } else {
            console.error("Product not found");
        }
    } catch (error) {
        console.error("Error fetching product:", error);
    }
});

const goBack = () => {
    router.push('/');  // Navigate to the home page
};
</script>
