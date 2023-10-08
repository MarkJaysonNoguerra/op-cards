<template>
    <OpSearch @search="search" :packs="packs"></OpSearch>
    <OpCards :cards="searchResults" @show-modal="showModal"></OpCards>
    <OpModal v-if="isModalVisible" @close-modal="isModalVisible = false" :card="cardOnModal" @next="next"
        @previous="previous"></OpModal>
</template>


<script setup>
import { ref } from 'vue';
import cardsCollections from '../../public/data/data.json'
import OpSearch from './OpSearch.vue'
import OpCards from './OpCards.vue'
import OpModal from './Modal/OpModal.vue';

const packs = Object.keys(cardsCollections)
const flattenCards = Object.values(cardsCollections).reduce((acc, curr) => {
    return acc.concat(curr);
}, []);

const searchResults = ref([])
const search = (searchTerm) => {
    if (!searchTerm) return;

    // return all data
    if (searchTerm.includes('OPALL')) {
        searchResults.value = flattenCards;
        return;
    }

    // search with rarity (adding comma and card rarity)
    if (searchTerm.includes(',')) {
        const [term, rarity] = searchTerm.split(',')
        searchResults.value = flattenCards.filter(x =>
            x.id.toLowerCase().includes(term.toLowerCase()) && x.rarity.toLowerCase() === rarity.toLowerCase()
        );
        return;
    }

    // search parallel cards (just appending * on search)
    if (searchTerm.includes('*')) {
        const [term] = searchTerm.split('*')
        searchResults.value = flattenCards.filter(x =>
            x.id.toLowerCase().includes(term.toLowerCase()) && x.parallel
        );
        return;
    }

    // normal search
    searchResults.value = flattenCards.filter(x => x.id.toLowerCase().includes(searchTerm.toLowerCase()));
}

const cardOnModal = ref(null);
const isModalVisible = ref(false);
const cardOnModalIndex = ref(null);
const showModal = (index) => {
    isModalVisible.value = true;
    cardOnModalIndex.value = index;
    cardOnModal.value = searchResults.value[index];
}

const next = () => {
    if (cardOnModalIndex.value === searchResults.value.length - 1) {
        cardOnModalIndex.value = 0;
        cardOnModal.value = searchResults.value[cardOnModalIndex.value];
        return;
    }
    cardOnModalIndex.value++;
    cardOnModal.value = searchResults.value[cardOnModalIndex.value];
}

const previous = () => {
    if (cardOnModalIndex.value === 0) {
        cardOnModalIndex.value = searchResults.value.length - 1;
        cardOnModal.value = searchResults.value[cardOnModalIndex.value];
        return;
    }
    cardOnModalIndex.value--;
    cardOnModal.value = searchResults.value[cardOnModalIndex.value];

}

</script>