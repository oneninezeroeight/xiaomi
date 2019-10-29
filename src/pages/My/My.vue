<template>
  <div>
    <div class="content app-view app-view-with-footer">
      <Header />
      <Order />
      <Main />
    </div>
  </div>
</template>
<script>
import Header from "./header.vue";
import Order from "./Order.vue";
import Main from "./Main.vue";
export default {
  data() {
    return {
      name: "我的"
    };
  },
  components: {
    Header,
    Order,
    Main
  }
};
</script>

<style scoped>
.content {
  overflow-y: scroll;
  white-space: nowrap;
  overflow: hidden;
  padding-bottom: 3.530037rem;
}
</style>