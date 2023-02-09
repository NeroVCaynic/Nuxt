<template>
    <div class="mx-auto flex flex-col gap-8 justify-center items-center h-screen">
        <p class="text-8xl font-bold">{{ error.statusCode }}</p>
        <p class="my-4 font-semibold text-xl">{{ error.message }}</p>
        <button class="font-bold text-white bg-blue-900 w-32 h-12 rounded m-4" @click="handleClearError">Go Home</button>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => {
    clearError({ redirect: '/' })
}
</script>

<style scoped>

</style>