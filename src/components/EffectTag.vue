<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    effect: {
        type: String,
        required: true
    }
});

const router = useRouter();

const onEffectClick = (effect) => {
    router.push({ name: 'EffectView', params: { effect } });
};

</script>

<template>
    <span
        class="inline bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer"
        @click="onEffectClick(effect)">
        #{{ effect }}
        </span>
</template>