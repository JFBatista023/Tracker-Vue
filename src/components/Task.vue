<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{ task.description || 'Task without description' }}
            </div>
            <div class="column">
                <Stopwatch :seconds="task.seconds" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import ITask from '@/interfaces/ITask';
import { PropType, defineComponent } from 'vue';
import Box from './Box.vue';
import Stopwatch from './Stopwatch.vue';


export default defineComponent({
    name: "TaskCard",
    components: { Stopwatch, Box },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>
