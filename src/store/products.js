export default {
  state: {
    products: [],
  },
  mutations: {},
  actions: {
    async fetchProducts() {
     const res = await fetch('https://raw.githubusercontent.com/iliabaan/project_brand/master/db.json');
     const products = await res.json();
     console.log(products);
    }
  },
  getters: {
    allProducts(state) {
      return state.products;
    }
  },
};
