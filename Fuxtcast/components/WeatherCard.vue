<template>
    <div class="glass-card-light bg-gradient-to-b from-blue-400 to-blue-200 h-72 flex flex-col justify-evenly mx-4 w-64 rounded-md">
        <div class="flex justify-center items-center m-2">
            <img :src="`http://openweathermap.org/img/wn/${image}@2x.png`" alt="">
        </div>
        <hr>
        <div class="flex flex-col gap-4 m-4">
            <span class="text-xl font-mono whitespace-nowrap">{{ WeatherStatues }}, <b>{{ Math.round(Temperature) }}C°</b></span>
            <span class="text-md font-medium">{{ Day }}</span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    WeatherStatues: String,
    Temperature: Number,
    Day: String,
    image: String,
});

</script>

<style scoped>

</style>