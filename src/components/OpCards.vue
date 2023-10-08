<template>
    <div ref="container" class="w-full h-[80vh] mt-12  overflow-y-auto">
        <div class="flex flex-wrap justify-center items-center gap-6 mx-8">
            <OpCard v-for="(card, index) in cards" :key="card.id" :card="card" :index="index" @show-modal="showModal">
            </OpCard>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import OpCard from './OpCard.vue'
import { onUpdated } from 'vue'

const props = defineProps({
    cards: Array
});

const emit = defineEmits(['showModal']);

const showModal = (index) => {
    emit('showModal', index)
}

const container = ref(null);

onUpdated(() => {
    container.value.scrollTo(0, 0);
})

</script>