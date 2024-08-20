<template>
    <div class="flex items-center p-4 border rounded-lg shadow-sm">
        <!-- Image Section -->
        <div class="flex-shrink-0 w-12 h-12 mr-4">
            <img :src="image" alt="Effect Icon" class="w-full h-full object-cover rounded-full">
        </div>
        <!-- Text Section -->
        <div class="flex-1">
            <p class="text-lg font-medium">{{ effect }}</p>
            <p class="text-sm text-gray-600 mt-1">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    effect: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
</script>
