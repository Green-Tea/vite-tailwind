<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router/index.ts'
import Footer from '@/components/Footer.vue'
import productService from '@/services/productService.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const menuItems = ref([
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Categories', link: '/categories' },
  { id: 3, name: 'About', link: '/about' }
]);

const searchQuery = ref('');
const auth = getAuth();
const isAdminVisible = ref(false);

const handleSearch = async () => {
  if (searchQuery.value.trim() === '') return;

  try {
    const products = await productService.getProductByName(searchQuery.value);
    if (products.length > 0) {
      router.push({ name: 'ProductSearchResults', params: { products: JSON.stringify(products) } });
    } else {
      console.log('No products found');
    }
  } catch (error) {
    console.error('Error searching products:', error);
  }
};

const checkAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      isAdminVisible.value = true;
    } else {
      // No user is signed in
      isAdminVisible.value = false;
    }
  });
};

onMounted(() => {
  checkAuth(); // Check authentication status when the component is mounted
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <nav>
      <div class="bg-gray-800 text-gray-100 px-3 py-5 md:flex justify-between items-center">
        <div class="flex text-gray-500 text-l">
          <RouterLink to="/" class="flex items-center">
            <h1 class="h-6 w-6 mr-2 md:mr-4 md:h-9 md:w-9">Logo</h1>
            <h1 class="text-l md:text-2xl">Company Name</h1>
          </RouterLink>
        </div>

        <div class="relative md:w-1/3">
          <input
            v-model="searchQuery"
            @input="handleSearch"
            type="text"
            placeholder="Search for products..."
            class="w-full px-4 py-2 border rounded-md text-black"
          />
        </div>

        <ul class="md:flex md:items-center">
          <li class="md:mx-4" v-for="menuItem in menuItems" :key="menuItem.id">
            <RouterLink :to="menuItem.link" class="hover:text-amber-400 md:text-xl">
              {{ menuItem.name }}
            </RouterLink>
          </li>
          <!-- Conditionally render the admin link -->
          <li v-if="isAdminVisible" class="md:mx-4">
            <RouterLink to="/admin" class="hover:text-amber-400 md:text-xl">
              Admin
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>

    <RouterView class="flex-grow"/>

    <Footer />
  </div>
</template>
