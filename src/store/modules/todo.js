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
    commit('setTodos', res.data)
  }
};
const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
