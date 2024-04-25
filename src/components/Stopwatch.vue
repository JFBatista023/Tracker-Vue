<template>
    <section>
        <strong>
            {{ elapsedTime }}
        </strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StopWatch',
    props: {
        seconds: {
            type: Number,
            default: 0
        }
    },
    computed: {
        elapsedTime(): string {
            return new Date(this.seconds * 1000).toISOString().substring(11, 19);
        }
    },
})
</script>