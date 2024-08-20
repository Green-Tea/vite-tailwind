<template>
    <div>
      <div class="container mx-auto pb-10">
        <h2 class="text-4xl font-bold py-5 my-6">Effects</h2>
        
        <div class="mb-8">
          <h3 class="text-2xl font-bold mb-4 inline-block mr-4">Filter Tags:</h3>
          <div class="inline-block">
            <EffectTag 
              v-for="effect in allEffects" 
              :key="effect.id" 
              :effect="effect.effect"
              :active="effect.effect === filter"
              @click="toggleFilter(effect.effect)"
              class="mr-2 mb-2 cursor-pointer"
            />
          </div>
        </div>
  
        <div v-if="filteredProducts.length > 0" class="mb-10">
          <h3 class="text-2xl font-bold py-3 mb-4">{{ filter }}</h3>
          <div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <ProductCard 
              v-for="product in filteredProducts" 
              :key="product.id" 
              :product="product"
            />
          </div>
        </div>
        <div v-else-if="filter" class="text-xl">
          No products found for the selected effect.
        </div>
        <div v-else v-for="(products, effect) in categorizedProducts" :key="effect" class="mb-10">
          <h3 class="text-2xl font-bold py-3 mb-4">{{ effect }}</h3>
          <div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <ProductCard 
              v-for="product in products" 
              :key="product.id" 
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import productService from '@/services/productService';
  import effectService from '@/services/effectService';
  import ProductCard from '@/components/ProductCard.vue';
  import EffectTag from '@/components/EffectTag.vue';
  import Sentiment from 'sentiment';
  
  const router = useRouter();
  const route = useRoute();
  const sentiment = new Sentiment();
  const products = ref([]);
  const allEffects = ref([]);
  
  const filter = ref('');
  
  watch(
  () => route.params.effect,
  (newEffect) => {
    if (!newEffect) {
      filter.value = '';
    } else {
      filter.value = newEffect;
    }
  }
);
  
  onMounted(async () => {
    try {
      products.value = await productService.getAllProducts();
      allEffects.value = await effectService.getAllEffects();
      // Set initial filter from route params if available
      filter.value = route.params.effect || '';
    } catch (error) {
      console.error('Error fetching products or effects:', error);
    }
  });
  
  const categorizedProducts = computed(() => {
    const categories = {};
    products.value.forEach(product => {
      product.effects.forEach(effect => {
        const result = sentiment.analyze(effect);
        if (result.score > 0) {
          if (!categories[effect]) {
            categories[effect] = [];
          }
          categories[effect].push(product);
        }
      });
    });
    return categories;
  });
  
  const filteredProducts = computed(() => {
    if (!filter.value) return [];
    return products.value.filter(product => 
      product.effects.includes(filter.value)
    );
  });
  
  const toggleFilter = (effect) => {
    if (filter.value === effect) {
      filter.value = '';
      router.push({ name: 'effects' }); // Assuming 'effects' is the name of this route
    } else {
      filter.value = effect;
      router.push({ name: 'effects', params: { effect } });
    }
  };
  </script>
  