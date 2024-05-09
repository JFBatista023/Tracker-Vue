<template>
    <TaskForm @onStopTask="addTask" />
    <div class="list">
    <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
    <Box v-if="listIsEmpty">
        No tasks today!
    </Box>
    </div>
  </template>
  
  <script lang="ts">
    import Box from '@/components/Box.vue';
import Task from '@/components/Task.vue';
import TaskForm from '@/components/TaskForm.vue';
import { defineComponent } from 'vue';
import ITask from '../interfaces/ITask';
  
    export default defineComponent({
        name: 'App',
        components: { TaskForm, Task, Box },
        data() {
            return {
                tasks: [] as ITask[]
            }
        },
        methods: {
            addTask(task: ITask) {
                this.tasks.push(task);
            }
        },
        computed: {
            listIsEmpty(): boolean {
                return this.tasks.length === 0;
            }
        }
    });
  </script>
  
  <style scoped>
    .list {
            padding: 1.25rem;
        }
  </style>
  