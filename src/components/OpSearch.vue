<template>
    <div class="w-full mt-2">
        <div class="flex justify-center items-center pt-5">
            <div class="relative w-6/12 md:w-3/12">
                <input v-model="searchTerm" type="text" @keyup.enter="$emit('search', searchTerm)"
                    class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    :placeholder="'Search ex: op01-001,' + ' You can also search by card packs ' + packs"
                    :title="'You can search by card packs ' + packs" required>
            </div>
            <button @click="$emit('search', searchTerm)"
                class="w-24 ml-2 px-4 py-2.5 font-semibold text-sm bg-sky-500 text-white rounded shadow-sm">
                Search
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const searchTerm = ref(null);
const emit = defineEmits(['search']);

const props = defineProps({
    packs: Array
});
</script>