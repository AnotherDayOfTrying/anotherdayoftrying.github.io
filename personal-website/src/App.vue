<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Links from './components/Links.vue'
import Name from './components/Name.vue'
import Grid from './components/Grid.vue'
import Drawer from './components/Drawer.vue'
</script>

<template>
  <main>
    <Name />
    <Links />
    <Drawer />
    <Grid />
  </main>
</template>

<style scoped>
main {
  overflow: hidden;
}
@media (min-width: 1024px) {

}
</style>
