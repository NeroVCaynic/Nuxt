<template>
    <header class="flex flex-col gap-2 justify-center h-80 text-center text-white bg-gradient-to-r from-green-400 to-green-600">
        <span class="text-6xl">Welcome to Nuxtify</span>
        <div class="flex justify-center items-center gap-2">
            <i class="material-icons text-xl">shopping_cart</i>
            <span class="text-xl">Vue your next shopping list</span>
        </div>
    </header>
    <section class="flex flex-col gap-6 justify-center my-4">
        <div class="flex flex-col justify-center gap-2 text-neutral-700">
            <span class="text-4xl text-center">We sell a variety of products</span>
            <span class="text-lg text-center">-From daily wears to alluring jewelery-</span>
        </div>
        <div class="grid sm:grid-cols-3 gap-4">
            <div class="card h-80 flex flex-col gap-2">
                <img :src="products[0].image" alt="thumbnail-image" class="thumbnail">
                <div class="flex flex-col gap-6 overflow-hidden">
                    <h1 class="text-lg font-bold">{{products[0].title}}</h1>
                    <p>{{products[0].description}}</p>
                </div>
            </div>
            <div class="card h-80 flex flex-col gap-2">
                <img :src="products[1].image" alt="thumbnail-image" class="thumbnail">
                <div class="flex flex-col gap-6 overflow-hidden">
                    <h1 class="text-lg font-bold">{{products[1].title}}</h1>
                    <p>{{products[1].description}}</p>
                </div>
            </div>
            <div class="card h-80 flex flex-col gap-2">
                <img :src="products[2].image" alt="thumbnail-image" class="thumbnail">
                <div class="flex flex-col gap-6 overflow-hidden">
                    <h1 class="text-lg font-bold">{{products[2].title}}</h1>
                    <p>{{products[2].description}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const {data: products} = await useFetch('https://fakestoreapi.com/products?limit=3')

</script>

<style scoped>

.thumbnail {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}

</style>