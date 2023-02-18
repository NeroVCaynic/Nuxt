<template>
    <Teleport to="body">
        <Transition name="model-outer">
            <div v-show="modelActive" class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
                <Transition name="model-inner">
                    <form v-if="modelActive" class="h-1/2 mt-32 max-w-screen-md bg-green-400 border-4 border-green-600 rounded-xl flex flex-col justify-center items-center gap-6 px-4 py-2" @submit.prevent="setTask(title, isDueOn, isFav)">
                        <h1 class="text-2xl font-bold">Add Task</h1>
                        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <div class="flex flex-col justify-center items-center gap-2">
                                <label for="text" class="text-xl">Title</label>
                                <input id="text" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Appointment At.." v-model="title" required>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <label for="slidebox" class="text-xl">Due?</label>
                                <select id="slidebox" class="block appearance-none w-48 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" v-model="isDueOn" required>
                                    <option :value="null">Unknown</option>
                                    <option value="Sunday">Sunday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                </select>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <label for="checkbox" class="text-xl">Favorite?</label>
                                <input id="checkbox" type="checkbox" value="" class="w-6 h-6 text-green-700 bg-gray-100 border-gray-300 rounded focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="isFav">
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <button type="button" class="btn" @click="$emit('close-model')">Close</button>
                            <button class="btn">Submit</button>
                        </div>
                    </form>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { useTaskStore } from '~~/store/todo';

const taskStore = useTaskStore()

let title = ref('');
let isDueOn = ref(null);
let isFav = ref(false);

defineEmits(["close-model"]);
defineProps({
    modelActive: {
        type: Boolean,
        default: false,
    }
});

function setTask(title, isDueOn, isFav) {
    taskStore.setTask((taskStore.totalCount+1), title, isDueOn, isFav)
}

</script>

<style scoped>
.model-outer-enter-active, .model-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.052, 0.02, 0.19, 1.02);
}
.model-outer-enter-from, .model-outer-leave-to {
    opacity: 0;
}
.model-inner-enter-active, .model-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.052, 0.02, 0.19, 1.02) 0.15s;
}
.model-inner-enter-from, .model-inner-leave-to {
    transition: all 0.3s cubic-bezier(0.052, 0.02, 0.19, 1.02);
}
.model-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
} 
.model-inner-leave-to {
    transform: scale(0.8);
}
</style>