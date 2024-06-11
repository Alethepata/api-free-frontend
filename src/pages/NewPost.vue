<script>
import { store } from '../data/store';

import axios from 'axios';

export default {
    name: "NewPost",
    data(){
        return {
            store,
            action: store.apiUrl + "post",
            title: "",
            content: "",
            published: ""
        }
    },
    methods: {
        getApi(endpoint, data) {
            axios.post(endpoint, data);
            this.success = true;
        },
        getForm() {
            const data = {
                title: this.title,
                content: this.content,
                published: this.published,
                tags: [1],
                categoryId: 1
            }
            this.getApi(store.apiUrl + "/posts", data);
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="container-form">
            <h1>New Post</h1>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input v-model="this.title" type="title" class="form-control" id="title" name="title" />
                </div>
    
                <div class="mb-3">
                    <label for="content" class="form-label">Content</label>
                    <input v-model="this.content" type="content" class="form-control" id="content" />
                </div>
    
                <div class="form-check">
                  <input class="form-check-input" v-model="this.published" v-bind:value="'true'" type="radio" name="flexRadioDefault" id="true" checked>
                  <label class="form-check-label" for="true">
                    Pubblicato
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" v-model="this.published" v-bind:value="'false'" type="radio" name="flexRadioDefault" id="false">
                  <label class="form-check-label" for="false">
                    Non pubblicato
                  </label>
                </div>
    
                </form>
            <button @click="this.getForm"  class="btn btn-primary button">Submit</button>
        </div>
    </div>
</template>


<style>

</style>