<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 h-[83vh] overflow-y-auto">
            <div v-for="item in products">
                <ProductCard :product="item"/>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

const {data: products} = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxtify: Shop',
    meta: [
        {name: 'description', content: 'nutify shopping list'}
    ]
})
</script>

<style scoped>

::-webkit-scrollbar {
    width: 0.5em;
}

::-webkit-scrollbar-track {
    border-radius: 100vh;
    margin-block: 0.5em;
}

::-webkit-scrollbar-thumb {
    background-color: #12b488;
    border-radius: 100vh;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #11cf9d;
    border-radius: 100vh;
}

</style>