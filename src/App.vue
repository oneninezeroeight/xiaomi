<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="this.$route.meta.miss" />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  props: ["miss"],
  name: "app",
  components: {
    Footer
  },
  methods: {
    aa() {
      window.console.log(this.$route);
    }
  }
};
</script>

<style>

</style>
