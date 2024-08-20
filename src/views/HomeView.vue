<template>
  <div>
    <!-- Swiper Container for Mobile Carousel -->
    <div class="swiper-container sm:hidden">
      <h2 class="text-4xl font-bold py-5 my-6">Products</h2>
      <swiper :slides-per-view="1" space-between="10" pagination navigation>
        <swiper-slide v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </swiper-slide>
      </swiper>
    </div>

    <!-- Grid Layout for Larger Screens -->
    <div class="container mx-auto pb-10 hidden sm:grid">
      <h2 class="text-4xl font-bold py-5 my-6">Products</h2>
      <div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import productService from '@/services/productService';
import ProductCard from '@/components/ProductCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// Create a reactive variable to store products
const products = ref([]);

// Fetch products when the component is mounted
onMounted(async () => {
  try {
    products.value = await productService.getAllProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>
