<template>
    <div class="products-sort">
        <div>
            <h4>Trending now</h4>
            <div>Bohemian | Floral | Lace Floral | Lace | Bohemian</div>
        </div>
        <div>
            <h4>Size</h4>
            <div>
             <p v-for="size in sizes" :key='size'>
             <input type="checkbox" :name="size" :value="size">{{size}}</p>
             </div>
        </div>
        <div>
            <h4>pRICE</h4>
            <div class="range-slider">
                <input type="range"
                 min="0"
                 max ="100"
                 step="1"
                 v-model="minPrice"
                 @change="setRange"
                 >
                <input type="range"
                 min="0"
                 max ="100"
                 step="1"
                 v-model="maxPrice"
                 @change="setRange"
                 >
            </div>
 <div class="range-prices">
            <p>${{minPrice}}</p>
            <p>${{maxPrice}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'sortprodcomp',
  data() {
    return {
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
      minPrice: 0,
      maxPrice: 100,
    };
  },
  methods: {
    setRange() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
  },
};
</script>

<style scoped>
    .products-sort {
        height: 125px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .products-sort > div > h4 {
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
        text-transform: uppercase;
        color: #6f6e6e;
        margin-bottom: 25px;
    }

    .products-sort > div:first-of-type {
        width: 176px;
        font-size: 14px;
        line-height: 26px;
        font-weight: 400;
        color: #6f6e6e;
    }

    .products-sort > div:nth-of-type(2) {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        text-transform: uppercase;
        color: #6f6e6e;
    }

    .products-sort > div:nth-of-type(2) > div {
        display: flex;
        width: 210px;
        height: 40px;
        margin-left: -20px;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .products-sort > div:nth-of-type(2) > div > p {
        margin: auto 23px;
        width: 5px;
        display: flex;
        align-items: center;
    }

    .products-sort > div:nth-of-type(2) > div > p > input {
        margin-right: 3px;
    }

    .range-slider {
        margin-top: 24px;
        text-align: center;
        position: relative;
        display: flex;
    }

    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        width: 200px;
        left: 0;
        bottom: 0;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
        cursor: ew-resize;
    }

    .range-prices {
        display: flex;
        width: 200px;
        margin-top: 15px;
    }

    .range-prices > p:last-of-type {
        margin-left: 150px;
    }
</style>
