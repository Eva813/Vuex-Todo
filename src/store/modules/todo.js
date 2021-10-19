import axios from 'axios';

const state = {
  todos: []
};
const getters = {
  getTodos: (state) => state.todos,
};
const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    // console.log(res.data);
    commit('setTodos', res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed: false });
    commit('addNewTodo', res.data);
  }

};
const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  addNewTodo: (state, todo) => {
    state.todos.unshift(todo);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
