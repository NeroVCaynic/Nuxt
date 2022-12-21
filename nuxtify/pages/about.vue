<template>
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-6 text-white bg-gradient-to-br from-green-400 to-green-600 p-4">
            <h1 class="text-4xl">About</h1>
            <p class="text-xl">
                Nuxtify is a Selling, Shopping, Delivery site,
                Owned and managed by under single entity and deployed for testing purposes.<br>
                Products under this site are <b>NOT</b> real and have no known real pre-tence.<br>
                All items are solely for show due to the site's nature and are not meant to be sold or delivered.
            </p>
            <p class="text-xl">
                You are allowed to explore around, view and check all the site has to offer.<br>
                From the Home page to the Products page, be noted non of the buttons except links and details work<br>
                as they are only for the viewer understanding and site layout. 
            </p>
        </div>
        <span class="text-2xl font-bold text-center text-green-500">Status: {{ data.message }}</span>
    </div>
</template>

<script setup>

const { data } = await useFetch('/api/setup')

</script>

<style scoped>

</style>