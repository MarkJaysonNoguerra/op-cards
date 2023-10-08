<template>
    <div class="h-[60vh] w-[70vw] mb-[5rem]">
        <div class="flex flex-col items-center justify-center w-full h-30 bg-black rounded-lg p-3">
            <h3 class=" text-white">
                {{ card.cardSerial }} | {{ card.rarity }} | {{ card.cardType }}
            </h3>
            <h2 class="text-xl text-center text-white">
                {{ card.cardName }}
            </h2>
        </div>
        <div class="h-[100%] min-w-[70vw] max-w-[80vw] bg-white border border-gray">
            <div v-if="!toggleDetails" class="h-full flex items-center justify-center">
                <img class="rounded-t-lg max-w-[100%] max-h-[100%]" :src="`data/assets//${card.id}.png`"
                    :alt="card.cardName" />
            </div>
            <div v-if="toggleDetails" class="flex items-center justify-center p-2">
                <ul class="w-full">
                    <div class="flex border-b border-gray">
                        <li class="text-small w-1/2 my-3">
                            <b>Cost : </b>
                            <span> {{ card.cost }}</span>
                        </li>
                        <li class="text-small w-1/2 my-3">
                            <b>Attribute : </b>
                            <span> {{ card.attribute }}</span>

                        </li>
                    </div>
                    <div class="flex border-b border-gray">
                        <li class="text-small w-1/2 my-3">
                            <b>Power : </b>
                            <span> {{ card.power }}</span>
                        </li>
                        <li class="text-small w-1/2 my-3">
                            <b>Counter : </b>
                            <span> {{ card.counter }}</span>
                        </li>

                    </div>

                    <li class="border-b border-gray my-3">
                        <b>Color : </b>
                        <span> {{ card.color }}</span>

                    </li>
                    <li class="border-b border-gray my-3">
                        <b>Type : </b>
                        <span> {{ card.type }}</span>

                    </li>
                    <li class="border-b border-gray my-3">
                        <b>Effect : </b><br />
                        <span> {{ card.effect }}</span>

                    </li>
                    <li v-if="card.trigger" class="border-b border-gray my-3">
                        <p class="font-bold">Trigger </p>
                        <span> {{ card.trigger }}</span>

                    </li>
                    <li class="border-b border-gray my-3">
                        <p class="font-bold">Card Sets(s) </p>
                        <span> {{ card.cardSet }}</span>

                    </li>

                </ul>
            </div>
        </div>
        <div class="rounded-[10px] mx-auto text-center max-w-[70%] md:max-w-[45vh] p-5 bg-sky-500 mt-2">
            <button @click="toggle" class="text-white">
                {{ toggleDetails ? 'Show Card' : 'Show Details' }}
            </button>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const props = defineProps({
    card: Object
});

const toggleDetails = ref(false);
const toggle = () => {
    toggleDetails.value = !toggleDetails.value;
}


</script>