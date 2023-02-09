<template>
    <div class="font-bold text-4xl text-stone-50 text-outline flex justify-center items-center my-4">
        <span>{{ cityName }}</span>
    </div>

    <!--weather board-->
    <div class="glass-card-light h-96 rounded-xl flex flex-col justify-center items-center md:flex-row lg:justify-start lg:items-center my-4 mx-10">
        <div class="lg:w-1/3 flex justify-center items-center mx-4 my-2.5">
            <img class="w-60" :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt=""> 
        </div>
        <div class="flex-1 lg:w-2/3 flex flex-col gap-8 m-4 overflow-y-auto">
            <div class="flex flex-col gap-4">
                <span class="text-4xl">{{ weather.weather[0].main }}, {{ Math.round(weather.main.temp) }}C°</span>
                <span class="text-2xl">{{ theDay }}</span>
            </div>
            <div class="text-xl font-medium flex flex-col gap-2">
                <span class="text-2xl mb-2">
                    {{ weather.weather[0].description }}
                </span>
                <span class="flex items-center">
                    Feels Like: {{ weather.main.feels_like }}
                    <span class="material-icons">air</span>
                </span>
                <span class="flex items-center">
                    Temperature Range: {{ weather.main.temp_min }}C° - {{ weather.main.temp_max }}C°
                    <span class="material-icons">flare</span>
                </span>
                <span>
                    Pressure: {{ weather.main.pressure }}, Humidity: {{ weather.main.humidity }}, Wind: {{ weather.wind.speed }}
                </span>
            </div>
        </div>
    </div>

    <!--Daily board-->
    <div class="glass-card-max h-96 rounded-xl flex justify-center items-center my-4 mx-10">
        <div class="overflow-x-auto flex justify-start items-center">
            <WeatherCard v-for="x in 7" :image="weather.weather[0].icon" :WeatherStatues="weather.weather[0].main" :Temperature="weather.main.temp" :Day="theDay"/>
        </div>
    </div>
</template>

<script setup>

var theDay = new Date().toLocaleDateString('en-us', { weekday:"long"});
var degreeUnits = 'metric';
var cityName;

if(process.client) {
    if (localStorage.getItem("currentLocation") === null) {
        localStorage.setItem("currentLocation", "London")
        cityName = "London"
    }
    else {
        cityName = localStorage.getItem("currentLocation")
    }
}

const apiKey = '<your key>';
const { data:weather } = await useFetch(`https://api.openweathermap.org/data/2.5/weather?units=${degreeUnits}&q=${cityName}&appid=${apiKey}`);

</script>

<style scoped>

.text-outline {
    -webkit-text-stroke: 2px black;
}

</style>
