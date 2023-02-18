<template>
    <div class="task">
        <div class="head-text flex flex-col gap-2">
            <h3 class="text-lg">{{ task.title }}</h3>
            <p class="text-sm text-gray-400 italic">{{ task.isDueOn? task.isDueOn : 'Unknown' }}</p>
        </div>
        <div class="icons">
            <i :class="{active: task.isFav}" class="material-icons select-none ease-in-out transition-colors" @click="taskStore.toggleFav(task.id)">favorite</i>
            <i class="material-icons select-none ease-in-out transition-colors delete" @click="taskStore.deleteTask(task.id)">delete</i>
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '~~/store/todo';

const { task } = defineProps(['task'])

const taskStore = useTaskStore()
</script>