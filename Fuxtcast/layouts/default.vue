<template>
    <div class="bg-blue-400 p-4 sm:w-full shadow-xl">
        <div class="mx-2 flex justify-between items-center">
            <div class="w-24 cursor-pointer">
                <img class="w-24" src="..\assets\Weather_logo.png" alt="Weather_logo">
            </div>

            <SearchBar @city="alterData"/>

            <!--
            <nav class="hidden font-bold text-lg text-white sm:flex gap-6 items-center">
                <button><span class="m-2 material-icons">bookmarks</span></button>
                <button><span class="m-2 material-icons">info</span></button>
                <button><span class="m-2 material-icons bg-slate-400 rounded-full">add</span></button>
            </nav>
            -->
        </div>
    </div>
    <slot />

    <!--
    <footer class="sm:hidden flex justify-evenly items-center gap-6 font-bold text-lg text-white bg-blue-600 border-t-2 border-t-blue-700 p-4">
        <button><span class="m-2 material-icons">bookmarks</span></button>
        <button><span class="m-2 material-icons">info</span></button>
        <button><span class="m-2 material-icons bg-slate-400 rounded-full">add</span></button>
    </footer>
    -->
</template>

<script setup>

const router = useRouter();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function alterData(event) {
    if(process.client) {
        localStorage.setItem("currentLocation", capitalizeFirstLetter(event));
        router.push('/redirect')
    }
};

</script>

<style lang="scss" scoped>

</style>