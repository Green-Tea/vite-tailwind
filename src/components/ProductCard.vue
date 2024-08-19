<template>
  <div class="rounded-lg shadow-md overflow-hidden cursor-pointer" @click="goToProductPage(product.id)">
    <!-- IMAGE DIV -->
    <div class="relative">
      <!-- NEW TAG -->
      <div v-if="isNewProduct" class="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 text-xs font-bold rounded-md">NEW</div>
      <img :src="product.image" alt="Product Image" class="w-full h-auto" />
    </div>
    <!-- PRODUCT INFO DIV -->
    <div class="px-4 py-3 flex flex-col space-y-2">
      <div class="text-2xl font-bold">{{ product.name }}</div>
      <div class="text-lg font-semibold text-gray-700">{{ formatPrice(product.price) }}</div>
      <div class="flex flex-wrap gap-1">
        <!-- Limit to 3 effects per card -->
        <effect-tag v-for="(effect, index) in product.effects.slice(0, 4)" :key="index" :effect="effect" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import EffectTag from '@/components/EffectTag.vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const router = useRouter();

// Method to format the price
const formatPrice = (price) => {
  return `฿${price.toFixed(2)}`;
};

// Computed property to check if the product is new
const isNewProduct = computed(() => {
  const creationTime = props.product.creationTime.toDate();
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  return creationTime >= twoWeeksAgo;
});

const goToProductPage = (id) => {
  router.push({ name: 'product', params: { id } });
};
</script>
