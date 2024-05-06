<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="New task form">
                <input type="text" class="input" placeholder="Which task you want start?" v-model="description">
            </div>

            <div class="column">
                <TimerControl @on-timer-control-stopped="stopTask" />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimerControl from './TimerControl.vue';

export default defineComponent({
    name: "TaskForm",
    components: { TimerControl },
    data() {
        return {
            description: ''
        }
    },
    methods: {
        stopTask(elapsedTime: number): void {
            this.$emit('onStopTask', {
                seconds: elapsedTime,
                description: this.description
            });
            this.description = '';
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