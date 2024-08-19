<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
  
        <!-- Login Form -->
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
  
          <div class="mb-4">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              class="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
  
          <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')
  const router = useRouter()
  
  const login = async () => {
    const auth = getAuth()
    errorMessage.value = ''
    
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      router.push('/') // Redirect to home page on successful login
    } catch (error) {
      errorMessage.value = error.message
    }
  }
  </script>
  
  <style scoped>
  /* Optional: Add custom styles here */
  </style>
  