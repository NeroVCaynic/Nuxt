<template>
    <div class="w-fit sm:w-full">
        <header class="shadow-sm bg-white relative">
            <nav class="container mx-auto p-4">
                <div class="flex gap-1 items-center justify-center cursor-pointer">
                    <span class="text-2xl text-green-500 material-icons">category</span>
                    <span class="text-2xl text-green-500">Nuxtify</span>
                </div>
                <button class="btn absolute top-3 right-3 flex gap-1 justify-center items-center">
                    <i class="material-icons">shopping_cart</i>
                    <span class="hidden sm:block">Cart</span>
                </button>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4 text-lg">
                <li><NuxtLink to="/" class="hover:text-green-300">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="hover:text-green-300">About</NuxtLink></li>
                <li><NuxtLink to="/products">Product</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>

.router-link-exact-active {
    color: #12b488;
}

</style>