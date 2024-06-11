import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'http://localhost:3000',
    posts: [],
});