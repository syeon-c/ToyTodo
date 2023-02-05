<template>
  <v-main>
    <v-container
      fluid
    >
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
        >
          <v-card>

            <v-list lines="two">
              <v-list-subheader>{{ card }}</v-list-subheader>
              <template v-for="todo in todoList" :key="todo.id">
                <v-list-item>
                  <template v-slot:prepend>
                    <v-avatar color="grey-darken-1"></v-avatar>
                  </template>

                  <v-list-item-title>{{ todo.title }}</v-list-item-title>

                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item>

                <v-divider
                  v-if="n !== 6"
                  :key="`divider-${n}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";

const cards = ['Today', 'Yesterday']
const todoList = ref([])

const fetchList = async () => {

  console.log("======GET LIST======")
  const data = await axios.get(`http://localhost:80/todos`);
  console.log(data)

  todoList.value = data.data
}

onMounted(() => {
  fetchList()
})

</script>

<style scoped>

</style>
