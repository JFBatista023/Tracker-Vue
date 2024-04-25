<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="New task form">
                <input type="text" class="input" placeholder="Which task you want start?">
            </div>

            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section>
                        <strong>
                            {{ elapsedTime }}
                        </strong>
                    </section>
                    <button class="button" @click="start">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="stop">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "TaskForm",
    data() {
        return {
            seconds: 0,
            stopwatch: 0
        }
    },
    computed: {
        elapsedTime(): string {
            return new Date(this.seconds * 1000).toISOString().substring(11, 19);
        }
    },
    methods: {
        start() {
            this.stopwatch = setInterval(() => {
                this.seconds++;
            }, 1000);
        },
        stop() {
            clearInterval(this.stopwatch);
        }
    }
})
</script>

<style scoped></style>