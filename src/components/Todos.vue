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

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #ef9a9a;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
<template>
  <h3>Todos</h3>
  <div class="legend">
    <span>雙重點擊來標示已完成的事項</span>
    <span> <span class="incomplete-box"></span> = 未完成 </span>
    <span> <span class="complete-box"></span> = 已完成 </span>
  </div>
  <div class="todos">
    <div
      @dblclick="onDblclick(todo)"
      class="todo"
      v-for="todo in getTodos"
      :key="todo.id"
      :class="{ 'is-complete': todo.completed }"
    >
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
    ...mapActions(["fetchTodos", "deleteTodo", "updataTodo"]),
    onDblclick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updataTodo(updTodo);
    },
  },
  computed: mapGetters(["getTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>


