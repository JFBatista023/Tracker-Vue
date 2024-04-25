<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Stopwatch :seconds="seconds" />
        <button class="button" @click="start" :disabled="stopwatchStarted">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="stop" :disabled="!stopwatchStarted">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stopwatch from "./Stopwatch.vue";

export default defineComponent({
  name: "TimerControl",
  emits: ['onTimerControlStopped'],
  components: {
    Stopwatch
  },
  data () {
    return {
      seconds: 0,
      stopwatch: 0,
      stopwatchStarted: false
    }
  },
  methods: {
    start() {
      this.stopwatchStarted = true
      this.stopwatch = setInterval(() => {
        this.seconds += 1        
      }, 1000)
    },
    stop() {
      this.stopwatchStarted = false
      clearInterval(this.stopwatch)
      this.$emit('onTimerControlStopped', this.seconds)
      this.seconds = 0
    }
  }
});
</script>