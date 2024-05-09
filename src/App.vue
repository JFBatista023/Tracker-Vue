<template>
  <main class="columns is-gapless is-multiline" :class="{'dark-mode': darkModeOn}">
    <div class="column is-one-quarter">
      <SideBar @onThemeChanged="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';

export default defineComponent({
  name: 'App',
  components: { SideBar },
  data() {
    return {
      darkModeOn: false
    }
  },
  methods: {
    changeTheme(darkModeOn: boolean) {8080
      this.darkModeOn = darkModeOn;
    }
  }
});
</script>

<style scoped>
    main {
      --bg-primary: #fff;
      --text-primary: #000;
    }

    main.dark-mode {
      --bg-primary: #2b2d42;
      --text-primary: #fff;
    }

    .content {
      background-color: var(--bg-primary);
    }
</style>
