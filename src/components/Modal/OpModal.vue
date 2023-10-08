<template>
    <div class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75">
        <div class="flex items-center justify-center" ref="target">
            <button aria-label="close" class="absolute top-0 right-0 text-xl text-white my-2 mx-4 h-8 w-8 bg-sky-500"
                @click.prevent="emit('closeModal')">
                X
            </button>
            <div>
                <OnClickOutside @trigger="emit('closeModal')">
                    <div class="flex justify-center items-center gap-x-1 lg:gap-x-2">
                        <button @click="emit('previous')" class="rounded-[10px] text-center p-3 lg:p-5 bg-sky-500 mt-1">
                            <p class="font-medium text-xl">&lt;</p>
                        </button>
                        <OpModalContentLarge class="hidden lg:block" :card="card" />
                        <OpModalContentSmall class="block lg:hidden" :card="card" />
                        <button @click="emit('next')" class="rounded-[10px] text-center p-3 lg:p-5 bg-sky-500 mt-1">
                            <p class="font-medium text-xl">&gt;</p>
                        </button>
                    </div>
                </OnClickOutside>
            </div>
        </div>
    </div>
</template>

<script setup>
import { OnClickOutside } from '@vueuse/components'
import { ref } from 'vue'
import OpModalContentLarge from './OpModalContentLarge.vue';
import OpModalContentSmall from './OpModalContentSmall.vue';

const emit = defineEmits(['next', 'previous', 'closeModal'])
const toggleDetails = ref(false);

const props = defineProps({
    card: Object
})

const toggle = () => {
    toggleDetails.value = !toggleDetails.value;
}

</script>6