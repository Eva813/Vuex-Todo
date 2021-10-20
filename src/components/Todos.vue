<style lang="scss" scoped>
.todos {
  display: grid;
  //使用grid 排版
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #fff;
  background: #ef9a9a;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #ca4f4f;
  }
}
</style>
<template>
  <h3>Todos</h3>
  <div class="todos">
    <div class="todo" v-for="todo in getTodos" :key="todo.id">
      {{ todo.title }}
      <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: mapGetters(["getTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>


