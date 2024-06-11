<script>
import Header from './components/Header.vue';
export default {
  name: "App",
  components: {
    Header
  }
}

</script>
<template>
  <Header/>
  <div class="container-custom">
    <div class="row vh-100 w-100">
      <div class="col-2">
        <h3>Persone suggerite</h3>
      </div>
      <div class="col w-100 h-100 overflow-auto">
        <RouterView />
      </div>
      <div class="col-2">
        <h3>Messaggi</h3>
      </div>
    </div>
  </div>
</template>

<style>
</style>
