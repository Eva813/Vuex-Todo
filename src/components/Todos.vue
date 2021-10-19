<style lang="scss" scoped>
.todos {
  display: grid;
  //使用grid 排版
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #ef9a9a;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  computed: mapGetters(["getTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>


