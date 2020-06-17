<template>
    <div class="products-filters">
      <h3 @click="showCats = !showCats">Category <font-awesome-icon icon="caret-down"/></h3>
       <transition name="slide">
      <ul class="category-list" v-show="showCats">
        <li v-for="category in categories" :key="category.title"
         @click="sort(category)">
          {{category.title}} <font-awesome-icon
          v-show="category.isCheked || allChecked" icon="check"/>
        </li>
      </ul>
       </transition>
            <h3 @click="showBrands = !showBrands"
            >Brand <font-awesome-icon icon="caret-down"/></h3>
            <transition name="slide">
            <ul class="brand-list" v-show="showBrands">
        <li v-for="brand in brands" :key="brand" @click="sort(brand)">
          {{brand}}
        </li>
      </ul>
            </transition>
            <h3 @click="showDesig = !showDesig">Designer <font-awesome-icon icon="caret-down"/></h3>
            <transition name="slide">
            <ul class="designer-list" v-show="showDesig">
        <li v-for="designer in designers" :key="designer" @click="sort(designer)">
          {{designer}}
        </li>
      </ul>
         </transition>
      </div>
</template>

<script>
export default {
  name: 'filterprodcomp',
  props: ['sortProducts'],
  data() {
    return {
      categories: [
        { title: 'Accessories', type: 'accoseriese', isCheked: false },
        { title: 'Bags', type: 'bags', isCheked: false },
        { title: 'Denim', type: 'denim', isCheked: false },
        { title: 'Hoodies & Sweatshirts', type: 'hoodies', isCheked: false },
        { title: 'Jackets & Coats', type: 'jackets', isCheked: false },
        { title: 'Pants', type: 'pants', isCheked: false },
        { title: 'Polos', type: 'polos', isCheked: false },
        { title: 'Shirts', type: 'shirts', isCheked: false },
        { title: 'Shoes', type: 'shoes', isCheked: false },
        { title: 'Shorts', type: 'shorts', isCheked: false },
        { title: 'Sweaters & Knits', type: 'sweaters', isCheked: false },
        { title: 'T-Shirts', type: 't-shirts', isCheked: false },
        { title: 'Tanks', type: 'tanks', isCheked: false },
      ],
      brands: ['Mango', 'Banana', 'Grape', 'Apple', 'Peach'],
      designers: ['Mango', 'Banana', 'Grape', 'Apple', 'Peach'],
      showCats: true,
      showDesig: false,
      showBrands: false,
      allChecked: false,
    };
  },
  methods: {
    sort(sorter) {
      this.sortProducts(sorter);
      this.allChecked = false;
      const check = sorter;
      if (check.isCheked === true) {
        check.isCheked = false;
      } else check.isCheked = true;
    },
  },
};
</script>

<style scoped>
 .products-filters {
    width: 220px;
    height: 90%;
    display: flex;
    flex-direction: column;
  }

  .products-filters > div > ul {
    display: flex;
    flex-direction: column;
  }

  .products-filters > h3 {
    display: flex;
    justify-content: space-between;
    width: 140px;
    height: 32px;
    border-left: 5px solid #ef5b70;
    border-bottom: 1px solid #ccc;
    margin: 5px 0;
    align-items: center;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ef5b70;
    cursor: pointer;
  }

  .products-filters > ul {
    padding-left: 16px;
    list-style-type: none;
    transform-origin: top;
    transition: .4s ease;
  }

  .products-filters > ul li.active {
      font-weight: 900;
  }

  .products-filters > ul > li {
    font-size: 14px;
    line-height: 33px;
    font-weight: 400;
    color: #6f6e6e;
  }

  /* .slide-enter, .slide-leave-to{
  transform: scaleY(0);
} */
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-2px);
  }
</style>
