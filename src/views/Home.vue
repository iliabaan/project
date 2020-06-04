<template>
  <div class="home">
    <index />
    <featuredproducts />
    <posterandsubscribe />
  </div>
</template>

<script>
import index from '@/components/index.vue';
import featuredproducts from '@/components/featuredProducts.vue';
import posterandsubscribe from '@/components/posterAndSubscribe.vue';


export default {
  name: 'Home',
  components: {
    index,
    featuredproducts,
    posterandsubscribe,
  },
};
</script>
