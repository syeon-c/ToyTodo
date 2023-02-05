<template>
    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
      rail
    >
      <v-list
        density="compact"
        nav
      >
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="TodoList" value="todoList"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Login" value="login"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Todo</v-toolbar-title>
    </v-app-bar>
</template>

<script setup>

  import {ref} from "vue";

  const drawer = ref(null)

</script>

<style scoped>

</style>
