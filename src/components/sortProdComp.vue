<template>
    <div class="products-sort">
        <div>
            <h4>Trending now</h4>
            <div>Bohemian | Floral | Lace Floral | Lace | Bohemian</div>
        </div>
        <div>
            <h4>Size</h4>
             <p v-for="size in sizes" :key='size'>
             <input type="checkbox" :name="size" :value="size">{{size}}</p>
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
            <p>{{minPrice}}</p>
            <p>{{maxPrice}}</p>
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
        width: 80%;
        height: 125px;
        background-color: #ccc2;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .range-slider {
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
    }

    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    input[type=range] {
        background: tomato;
    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }
</style>
