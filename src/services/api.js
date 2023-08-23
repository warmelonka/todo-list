import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';
const REQUEST_TIMEOUT = 5000;

const createApi = () => axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

export default {
  async fetchAllTodos() {
    const response = await createApi().get('todos');
    return response.data;
  },

  async addTask(task) {
    const response = await createApi().post('todos', task);
    return response.data;
  },

  async editTask(task) {
    const response = await createApi().put(`todos/${task.id}`, task);
    return response.data;
  },

  async removeTask(id) {
    return createApi().delete(`todos/${id}`);
  },
};
