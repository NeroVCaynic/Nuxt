<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <div class="hidden sm:flex gap-1 items-center justify-center cursor-pointer">
                    <span class="text-2xl text-green-500 material-icons">category</span>
                    <span class="text-2xl text-green-500">Nuxtify</span>
                </div>
                <NuxtLink to="/" class="sm:hidden flex gap-1 items-center justify-center cursor-pointer">
                    <span class="text-2xl text-green-500 material-icons">category</span>
                    <span class="text-2xl text-green-500">Nuxtify</span>
                </NuxtLink>
                
                <ul class="flex gap-4 items-center justify-center">
                    <li><NuxtLink to="/" class="hidden sm:block hover:text-green-300">Home</NuxtLink></li>
                    <li><NuxtLink to="/about" class="hover:text-green-300">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Product</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.router-link-exact-active {
    color: #12b488;
}

</style>