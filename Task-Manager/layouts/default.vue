<template>
    <div class="h-20 bg-green-400 shadow-lg flex justify-between items-center px-6">
        <div class="text-2xl cursor-pointer select-none">
            <h1 class="flex" @click="toggleMode()">
                <i class="material-icons" v-if="isDark">dark_mode</i>
                <i class="material-icons" v-else>light_mode</i>
                Task Manager
            </h1>
        </div>
        <div class="hidden sm:flex justify-center items-center gap-4">
            <NuxtLink to="/" class="hover:text-gray-500 rounded-md ease-in-out transition-all">All Tasks</NuxtLink>
            <NuxtLink to="/favorites" class="hover:text-gray-500 rounded-md ease-in-out transition-all">All Favorites</NuxtLink>
            <NuxtLink to="/dues" class="hover:text-gray-500 rounded-md ease-in-out transition-all">All Dues</NuxtLink>
        </div>
    </div>

    <div class="h-[80vh] overflow-y-auto">
        <slot />
    </div>

    <footer class="h-20 bg-green-400 shadow-lg flex justify-center items-center px-6 gap-4">
        <button class="material-icons text-white text-4xl" @click="toggleModel">add_circle</button>
        <div class="sm:hidden flex justify-center items-center gap-4">
            <NuxtLink to="/" class="hover:text-gray-500 rounded-md ease-in-out transition-all">All Tasks</NuxtLink>
            <NuxtLink to="/favorites" class="hover:text-gray-500 rounded-md ease-in-out transition-all">All Favorites</NuxtLink>
            <NuxtLink to="/dues" class="hover:text-gray-500 rounded-md ease-in-out transition-all">All Dues</NuxtLink>
        </div>
    </footer>

    <AddTask :modelActive="modelActive" @close-model="toggleModel"/>
    
</template>

<script setup>
import {useDark, useToggle} from '@vueuse/core';

const isDark = useDark();
const toggleMode = useToggle(isDark);
const modelActive = ref(null);
const toggleModel = () => {
    modelActive.value = !modelActive.value;
};
</script>

<style scoped>
.router-link-exact-active {
    --tw-border-opacity: 1;
    border-bottom-width: 4px;
    border-color: rgb(243 244 246 / var(--tw-border-opacity));
    --tw-text-opacity: 1;
    color: rgb(243 244 246 / var(--tw-text-opacity));
}
</style>