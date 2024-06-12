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
        <Post :posts="store.posts"/>
    </div>
</template>


<style>

</style>