<script>
export default {
    name: 'Posts',
    props: {
        // title : String,
        // content: String,
        // image: String,
        // tags: Array,
        // category: String
        posts:Array
    }

}
</script>

<template>
    <div v-for="post in posts" :key="post.id" class="post my-5 shadow rounded-5">
        <div class="px-4 pt-3">
            <div class="post-title position-relative">
                <h3>{{ post.title }}</h3>
                <div v-if="post.category" class="post-category position-absolute end-0 top-0">
                    <span class="badge text-bg-success rounded-pill">{{ post.category.name }}</span>
                </div>
            </div>
            <div class="post-content d-flex">
                <p>{{ post.content }}</p>
                <div v-for="tag in post.tags" :key="tag.id" class="post-tags mx-2">
                    <p>#{{ tag?.name }}</p>
                </div>
            </div>
        </div>
        <div v-if="post.image" class="post-img px-5 pb-5 pt-3 ">
            <img :src="post.image" :alt="post.title" class="rounded-5 shadow">
        </div>
    </div>


</template>

<style>
img{
    width: 100%;
    height: 100%;
}
</style>