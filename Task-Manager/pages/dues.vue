<template>
    <div class="task-list" v-for="task in taskStore.dues">
      <TaskBox :task="task"/>
    </div>
  </template>

<script setup>
import { useTaskStore } from '~~/store/todo';

const taskStore = useTaskStore()
</script>