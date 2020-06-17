export default {
  state: {
    products: [],
  },
  mutations: {
    updateAllProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts(ctx) {
      const res = await fetch('https://raw.githubusercontent.com/iliabaan/project_brand/master/db.json');
      const products = await res.json();
      ctx.commit('updateAllProducts', products);
    },
  },
  getters: {
    allProducts: (state) => state.products,
    filteredProducts: (state) => (sorters) => state.products
      .filter((product) => product[sorters[0]] === sorters[1]),
    // if (extraSort) {
    //   const filtered = state.products.filter((product) => product[sorters[0]] === sorters[1]);
    //   filtered.map((item) => {
    //     console.log(item.type, extraSort);
    //     if (item.type === extraSort) {
    //       console.log(item);
    //       vm.sortedProducts.push(item);
    //       console.log(vm.sortedProducts);
    //     }
    //     return vm.sortedProducts;
    //   });
    // } else
    // },
  },
};
