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
            published: "",
            tags: [],
            category:"",
            success:false
        }
    },
    methods: {
        async addPost(endpoint, data) {
            const errors = []
            await axios.post(endpoint, data)
            .catch(errorMessages => errorMessages.response.data.errors.forEach(error => errors.push(error)));

            if (errors.length != 0) {
                 this.success = false;
            } else {
                 this.success = true;
            }
        },
        getForm() {
            const data = {
                title: this.title,
                content: this.content,
                published: this.published,
                tags: this.tags,
                categoryId: this.category
            }
            this.addPost(store.apiUrl + "/posts", data);
        },
        getTags(endpoint) {
            axios.get(endpoint)
            .then(res => {
                store.tags = res.data;
                
            })
        },
        getCategories(endpoint) {
            axios.get(endpoint)
            .then(res => {
                store.categories = res.data;
            })
        }
    },
    mounted() {
        this.getTags(store.apiUrl + "/tags");
        this.getCategories(store.apiUrl + "/categories");
    }
}
</script>

<template>
    <div class="container">
        <div v-if="!this.success" class="container-form">
            <h1>New Post</h1>
            <div class="form">
                <form>
    
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input v-model="this.title" type="title" class="form-control" id="title" name="title" />
                    </div>
        
                    <div class="mb-3">
                        <label for="content" class="form-label">Content</label>
                        <textarea v-model="this.content" class="form-control" id="content"></textarea>
                    </div>
    
                    <div class="mb-3">
                        <div class="form-check">
                          <input class="form-check-input" v-model="this.published" v-bind:value="'true'" type="radio" name="flexRadioDefault" id="true">
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
                    </div>
        
                    <div class="mb-3">
                        <select v-model="this.category" class="form-select" aria-label="Default select example">
                            <option selected>Seleziona la categoria</option>
                            <option v-for="category in store.categories" :key="category.id" :value="category.id">{{category.name}}</option>
                        </select>
                    </div>
    
                    <div class="mb-3 d-flex flex-wrap justify-content-center gap-3">
                        <div v-for="tag in store.tags" :key="tag.id" class="form-check">
                          <input v-model="this.tags" v-bind:value="tag.id" class="form-check-input" type="checkbox" :value="tag.id" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                            {{tag.name}}
                          </label>
                        </div>
                    </div>
                    
                    </form>
                <button @click="this.getForm" class="btn btn-primary button">Submit</button>
            </div>
        </div>
        <div v-if="this.success" class="success">
            <h1>Post creato con successo</h1>
        </div>
</div>
</template>


<style>
.form{
    width: 60%;
    margin: 0 auto;

}
</style>