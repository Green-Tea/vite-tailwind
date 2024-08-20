<template>
  <div class="flex flex-col min-h-screen">
    <nav>
      <div class="bg-gray-800 text-gray-100 px-3 py-5 md:flex justify-between items-center">
        <!-- Left Section: Logo -->
        <div class="flex items-center text-gray-500">
          <RouterLink to="/" class="flex items-center">
            <p class="h-6 w-6 mr-2 md:mr-4 md:h-9 md:w-9">Logo</p>
            <p class="text-4xl">MisterDabs</p>
          </RouterLink>
        </div>

        <!-- Center Section: Search Bar with Icon -->
        <div class="relative flex-grow flex justify-end md:w-auto">
          <div v-if="!isOnProductPage" class="relative flex items-center w-full md:w-64">
            <span class="material-symbols-outlined absolute left-3 text-gray-500">
              search
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            </span>
            <input
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="Search for products..."
              class="w-full pl-10 px-4 py-2 border rounded-md text-black"
            />
            <!-- Search Results Dropdown -->
            <div v-if="filteredProducts.length" class="absolute left-0 top-full mt-1 w-full bg-white shadow-lg border border-gray-300 rounded-md z-10">
              <ul>
                <li
                  v-for="product in filteredProducts"
                  :key="product.id"
                  class="p-2 hover:bg-gray-100 text-black cursor-pointer"
                  @click="navigateToProduct(product)"
                >
                  {{ product.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right Section: Menu Items -->
        <ul class="md:flex md:items-center">
          <li class="md:mx-4" v-for="menuItem in filteredMenuItems" :key="menuItem.id">
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

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
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
const isOnProductPage = ref(false); // Reactive property to manage visibility of the search bar
const auth = getAuth();
const isAdminVisible = ref(false);
const allProducts = ref([]);
const filteredProducts = ref([]);
const route = useRoute();

// Computed property to filter menu items based on screen size
const filteredMenuItems = computed(() => {
  return menuItems.value.filter(item => {
    if (window.innerWidth < 640) { // Mobile view
      return item.name !== 'Categories';
    }
    return true; // Show all items in larger screens
  });
});

const handleSearch = async () => {
  if (searchQuery.value.trim() === '') return;

  try {
    const product = await productService.getProductByName(searchQuery.value);
    if (product && product.id) {
      searchQuery.value = '';
      router.push({ name: 'product', params: { id: product.id } });
    } else {
      console.log('No products found');
    }
  } catch (error) {
    console.error('Error searching products:', error);
  }
};

const updateFilteredProducts = () => {
  if (searchQuery.value.trim() === '') {
    filteredProducts.value = [];
    return;
  }

  filteredProducts.value = allProducts.value
    .filter(product => product.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    .slice(0, 5); // Limit to 5 options
};

const navigateToProduct = (product) => {
  searchQuery.value = '';
  filteredProducts.value = [];
  router.push({ name: 'product', params: { id: product.id } });
};

const checkAuth = () => {
  onAuthStateChanged(auth, (user) => {
    isAdminVisible.value = !!user;
  });
};

onMounted(async () => {
  checkAuth();
  allProducts.value = await productService.getAllProducts(); // Fetch all products
});

// Watch for changes in the search query and update the filtered products
watch(searchQuery, updateFilteredProducts);

// Watch for route changes to update the search bar's visibility
watch(() => route.name, (newRoute) => {
  isOnProductPage.value = newRoute === 'product';
});
</script>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>
