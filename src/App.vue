<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
        <TaskForm @onStopTask="addTask" />
        <div class="list">
          <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
          <Box v-if="listIsEmpty">
            No tasks today!
          </Box>
        </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from './components/Box.vue';
import SideBar from './components/SideBar.vue';
import Task from './components/Task.vue';
import TaskForm from './components/TaskForm.vue';
import ITask from './interfaces/ITask';

export default defineComponent({
  name: 'App',
  components: { SideBar, TaskForm, Task, Box },
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
