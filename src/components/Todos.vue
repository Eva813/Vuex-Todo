<style>
</style>
<template>
  <h3>Todos</h3>
  <div class="todos">
    <div class="todo" v-for="todo in getTodos" :key="todo.id">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["getTodos"]),
};
</script>


