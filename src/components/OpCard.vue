<template>
    <div class="block max-w-[18rem] h-3/6 rounded-lg bg-white">
        <div class="relative bg-cover bg-no-repeat">
            <img class="rounded-t-lg" :src="`data/assets/${card.id}.png`" :alt="card.cardName" />
        </div>
        <h5 class="text-xl text-center font-medium mt-1">
            {{ card.cardName }}
        </h5>
        <ul class="w-full">
            <li class="w-full border-neutral-100 border-opacity-100 px-6 py-1 dark:border-opacity-50">
                <b>{{ card.cardSerial }}</b> | <b>{{ card.rarity }}</b> | <b> {{ card.cardType }} </b>
            </li>
            <li class="w-full border-neutral-100 border-opacity-100 px-6 py-1 dark:border-opacity-50">
                <OpPrice :price="card.priceInYen"></OpPrice>
            </li>
        </ul>
        <div class="p-3">
            <button @click="showModal" class="p-3 font-semibold text-sm bg-sky-500 text-white rounded shadow-sm">
                More Details
            </button>
        </div>
    </div>
</template>

<script setup>

import OpPrice from './OpPrice.vue';

const props = defineProps({
    card: Object,
    index: Number
});

const emit = defineEmits(['showModal']);

const showModal = () => {
    emit('showModal', props.index);
}

</script>