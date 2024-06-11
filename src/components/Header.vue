<script>
  export default {
    name: 'Header',
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MyBlog</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{name: 'home'}" class="nav-link active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'new-posts'}" class="nav-link active">+</router-link>
            </li>
          </ul>
        </div>
</nav>
  </header>
</template>

<style>

</style>