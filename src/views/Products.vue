<template>
<div>
    <h1 style="text-transform: capitalize;">{{$route.params.type}}</h1>
    <productscomp />
</div>
</template>

<script>

import productscomp from '@/components/productsComp.vue';

export default {
  name: 'products',
  components: {
    productscomp,
  },
};
</script>
