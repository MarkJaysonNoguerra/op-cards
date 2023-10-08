<template>
    <div>
        <div class="flex flex-col items-center justify-center w-full h-30 bg-black rounded-lg p-3">
            <h3 class="text-xl font-small text-white">
                {{ card.cardSerial }} | {{ card.rarity }} | {{ card.cardType }}
            </h3>
            <h2 class="text-3xl text-center font-medium text-white">
                {{ card.cardName }}
            </h2>
        </div>
        <div class="flex bg-white min-border-2 ">
            <div class="min-w-[30rem] max-w-[30rem] relative bg-cover bg-no-repeat m-1">
                <img class="rounded-t-lg" :src="`data/assets/${card.id}.png`" :alt="card.cardName" />
            </div>
            <div class="min-w-[30rem] max-w-[30rem] h-full my-auto mx-4">
                <ul class="w-full">
                    <div class="flex border-b-2 border-gray">
                        <li class="w-1/2 text-l font-medium my-6">
                            <b class="text-xl">Cost : </b>
                            <span class="font-small"> {{ card.cost }}</span>
                        </li>
                        <li class="w-1/2 text-l font-medium my-6">
                            <b class="text-xl">Attribute : </b>
                            <span class="font-small"> {{ card.attribute }}</span>

                        </li>
                    </div>
                    <div class="flex border-b-2 border-gray">
                        <li class="w-1/2 text-l font-medium my-6">
                            <b class="text-xl">Power : </b>
                            <span class="font-small"> {{ card.power }}</span>
                        </li>
                        <li class="w-1/2 text-l font-medium my-6">
                            <b class="text-xl">Counter : </b>
                            <span class="font-small"> {{ card.counter }}</span>
                        </li>

                    </div>

                    <li class="border-b-2 border-gray text-l font-medium my-6">
                        <b class="text-xl">Color : </b>
                        <span class="font-small"> {{ card.color }}</span>

                    </li>
                    <li class="border-b-2 border-gray text-l font-medium my-6">
                        <b class="text-xl">Type : </b>
                        <span class="font-small"> {{ card.type }}</span>

                    </li>
                    <li class="border-b-2 border-gray text-l font-medium my-6">
                        <b class="text-xl">Effect : </b><br />
                        <span class="text-l font-small"> {{ card.effect }}</span>

                    </li>
                    <li v-if="card.trigger" class="border-b-2 border-gray text-l font-medium my-6">
                        <p class="text-xl font-bold">Trigger </p>
                        <span class="font-small"> {{ card.trigger }}</span>

                    </li>
                    <li class="border-b-2 border-gray text-l font-medium my-6">
                        <p class="text-xl font-bold">Card Sets(s) </p>
                        <span class="font-small"> {{ card.cardSet }}</span>

                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    card: Object
})

</script>