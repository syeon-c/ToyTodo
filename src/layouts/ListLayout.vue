<template>
  <v-app id="list">
  <AppBarComponent />
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
import AppBarComponent from "@/components/AppBarComponent.vue";

export default {
  name: "ListLayout",
  components: {AppBarComponent}
}
</script>

<style scoped>

</style>
