<template>
  <div class="home">
    <index />
    <featuredproducts />
  </div>
</template>

<script>
import index from '@/components/index.vue';
import featuredproducts from '@/components/featuredProducts.vue';


export default {
  name: 'Home',
  components: {
    index,
    featuredproducts,
  },
};
</script>
