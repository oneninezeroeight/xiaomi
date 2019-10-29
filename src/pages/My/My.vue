<template>
  <div>
    <div class="content app-view app-view-with-footer">
      <Header />
      <Order />
    </div>
  </div>
</template>
<script>
import Header from "./header.vue";
import Order from "./Order.vue";
export default {
  data() {
    return {
      name: "我的"
    };
  },
  components: {
    Header,
    Order
  }
};
</script>