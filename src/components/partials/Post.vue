<script>
export default {
    name: 'Posts',
    props: {
        title : String,
        content: String,
        image: String,
        tags: Array,
        category: String
    }

}
</script>

<template>
    <div class="post-title">
        <h1 class="text-center">{{ title }}</h1>
    </div>
    <div class="post-content d-flex">
        <p>{{ content }}</p>
        <div v-for="tag in tags" :key="tag.id" class="post-tags mx-2">
            <p>#{{ tag?.name }}</p>
        </div>
    </div>
    <div v-if="category" class="post-category">
        <p>Category : {{ category.name }}</p>
    </div>
    <div v-if="image" class="post-img">
        <img :src="image" :alt="title">
    </div>
</template>

<style>

</style>