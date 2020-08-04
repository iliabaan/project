<template>
  <div class="home">
    <index />
    <productsview keys="featured" values="true"
    header="Featured Products" v-bind:class="{ featured: isActive }"/>
    <router-link to="/products/all" class="btn-browse__all">Browse All Products
      <font-awesome-icon icon="long-arrow-alt-right" />
    </router-link>
    <posterandsubscribe />
  </div>
</template>

<script>

// В компонент productsview передаем ключ (keys) и значение (values)
import index from '@/components/index.vue';
import productsview from '@/components/ProductsView.vue';
import posterandsubscribe from '@/components/posterAndSubscribe.vue';


export default {
  name: 'Home',
  data() {
    return {
      isActive: true,
    };
  },
  components: {
    index,
    productsview,
    posterandsubscribe,
  },
};
</script>

<style scoped>
.btn-browse__all {
    padding: 1em 1.2em;
    display: block;
    background-color: #f16d7f;
    color: #ffffff;
    text-decoration: none;
    margin: 0 auto;
    width: 170px;
}
</style>
