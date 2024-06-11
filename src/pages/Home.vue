<script>

import axios from 'axios';
import { store } from '../data/store.js';

import Post from '../components/partials/Post.vue';

export default {
    name: 'Home',
    components: {
        Post
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getApi(endpoint) {
            axios.get(endpoint)
            .then(res => {
            store.posts = res.data;
        console.log(store.posts)
            })
        }
    },
    mounted() {
        this.getApi(store.apiUrl + "/posts")
    }
}
</script>

<template>
    <div class="container-posts m-5">
        <div v-for="post in store.posts" :key="post.id" class="post border rounded-3 px-5 py-4 my-5">
            <Post 
            :title="post.title" 
            :content="post.content"
            :image="post.image"
            :tags="post.tags"
            :category="post.category"
            />
        </div>
    </div>
</template>


<style>

</style>