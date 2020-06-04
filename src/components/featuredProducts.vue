<template>
    <div class="featured_products">
        <h1>Featured Products</h1>
        <div class="featured_products_list">
            <router-link :to="`product/id/${product.id}`" class="featured_product"
             v-for="product in products" :key="product.id">
             <div class="add_to_cart">
                 <div class="add_to_cart_block">
                     <p><font-awesome-icon icon="cart-plus" />Add to Cart</p>
                 </div>
                 </div>
            <img :src='product.img' alt="product_img">
            <h3>{{product.title}}</h3>
            <p class="price">${{product.price}}</p>
            </router-link>
        </div>
        <router-link to="products" class="featured_products_browse_all">Browse All Products
             <font-awesome-icon icon="long-arrow-alt-right" />
    </router-link>
    </div>
</template>

<script>

export default {
  name: 'featuredProducts',
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.$root.getJson('https://raw.githubusercontent.com/iliabaan/project_brand/master/db.json')
      .then((data) => {
        data.forEach((element) => {
          this.products.push(element);
        });
      });
  },
};
</script>

<style scoped>
.featured_products {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 6em;
}

.featured_products h1 {
    display: inherit;
    margin: 0 auto;
}

.featured_products_list {
    display: inherit;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
    flex-wrap: wrap;
}

.featured_product {
    display: flex;
    margin: 0 auto;
    margin-top: 1em;
    flex-direction: column;
    height: 23.5em;
    text-decoration: none;
}

.featured_product:hover {
    box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.15);
}

.featured_product:hover .add_to_cart {
    display: flex;
}

.add_to_cart {
    z-index: 1;
    position: absolute;
    display: none;
    background-color: rgba(58,56,56,0.83);
    width: 16.3em;
    height: 17.5em;
    justify-content: space-around;
    align-items: center;
}

.add_to_cart_block {
    display: inherit;
    align-items: center;
    justify-content: space-around;
    width: 7.8em;
    height: 2.5em;
    border: 1.0px solid #ffffff;
}

.add_to_cart_block > p {
    font-size: 13px;
    line-height: 1.2;
    font-weight: 700;
    color: #ffffff;
}

.add_to_cart_block > p > svg {
    margin-right: .5em;
}

.featured_product > img {
    position: relative;
    z-index: 0;
    width: 16.3em;
    height: 17.5em;
}

.featured_product > h3 {
    margin-top: 1.1em;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.2;
    margin-left: 10%;
    text-transform: uppercase;
    color: #222222;
}

.price {
    margin-left: 10%;
    margin-top: 1em;
    text-transform: uppercase;
    color: #f16d7f;
}

.featured_products_browse_all {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    margin-top: 3.5em;
    width: 13.250em;
    height: 3em;
    background-color: #f16d7f;
    font-size: 16px;
    line-height: 54px;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #ffffff;
    text-decoration: none;
}
</style>
