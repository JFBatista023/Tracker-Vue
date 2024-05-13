<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="New task form">
                <input type="text" class="input" placeholder="Which task you want start?" v-model="description">
            </div>
            <div class="column is-3">
                <div class="select">
                <select v-model="idProject">
                    <option value="">Select project</option>
                    <option
                    :value="project.id"
                    v-for="project in projects"
                    :key="project.id"
                    >
                    {{ project.name }}
                    </option>
                </select>
                </div>
            </div>

            <div class="column">
                <TimerControl @on-timer-control-stopped="stopTask" />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { key } from '@/store';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import TimerControl from './TimerControl.vue';

export default defineComponent({
    name: "TaskForm",
    components: { TimerControl },
    data() {
        return {
            description: '',
            idProject: ''
        }
    },
    methods: {
        stopTask(elapsedTime: number): void {
            this.$emit('onStopTask', {
                seconds: elapsedTime,
                description: this.description,
                project: this.projects.find(project => project.id == this.idProject)
            });
            this.description = '';
        }
    },
    setup() {
        const store = useStore(key);
        return {
            projects: computed(() => store.state.projects)
        }
    }
})
</script>

<style>
    .form {
        color: var(--text-primary);
        background-color: var(--bg-primary);
    }
</style>