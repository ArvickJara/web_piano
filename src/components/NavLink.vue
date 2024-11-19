<script setup>
import { computed } from 'vue';
import { Link as InertiaLink } from '@inertiajs/vue3';
import { RouterLink } from 'vue-router';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
    inertia: {
        type: Boolean,
        default: true, // Si es verdadero, usa Inertia Link; de lo contrario, usa RouterLink
    },
});

const classes = computed(() => {
    return props.active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out';
});
</script>

<template>
    <component :is="inertia ? InertiaLink : RouterLink" :href="href" :class="classes">
        <slot />
    </component>
</template>
