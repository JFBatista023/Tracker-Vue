<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="Logo">
        </h1>
        <button class="button" @click="changeTheme">
            {{ buttonText }}
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SideBar',
    emits: ['onThemeChanged'],
    data() {
        return {
            darkModeOn: false
        }
    },
    computed: {
        buttonText() {
            if (this.darkModeOn) {
                return "Turn off dark mode"
            }
            return "Turn on dark mode"
        }
    },
    methods: {
        changeTheme() {
            this.darkModeOn = !this.darkModeOn;
            this.$emit('onThemeChanged', this.darkModeOn);
        }
    }
})
</script>

<style scoped>
    header {
        padding: 1rem;
        background: #0d3b66;
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        header {
            padding: 2.5rem;
            height: auto;
        }
    }
</style>