<template>
    <div v-if="price">
        <b>Price</b>: {{ currentPrice }}
        <select @click="test" v-model="currency" class="border border-solid border-black">
            <option value=0>JPY</option>
            <option value=1>PHP</option>
            <option value=2>USD</option>
        </select>
    </div>
    <div v-else>
        <b>Price</b>:
        No Data
    </div>
</template>

<script setup>

import { ref, computed } from 'vue'

const currency = ref(0);

const props = defineProps({
    price: Number,
});

const currentPrice = computed(() => {
    if (currency.value == 1) {
        return (props.price * 0.38).toFixed(2);
    }

    if (currency.value == 2) {
        return (props.price * 0.0067).toFixed(2);
    }

    return props.price
})

</script>