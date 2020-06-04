<template>
  <div class="poster_and_subscribe">
    <div class="poster__block">
      <div class="poster__block-pic">
        <h3>30% <span>OFFER</span><br><span>FOR WOMEN</span></h3>
      </div>
      <div class="poster__block-desc">
        <div>
          <font-awesome-icon icon="truck-moving" />
          <div>
            <h4>Free Delivery</h4>
            <p>Worldwide delivery on all. Authorittively
              morph next-generation innovation with extensive models.</p>
          </div>
        </div>
        <div>
          <font-awesome-icon icon="percent" />
          <div>
            <h4>Sales & discounts</h4>
            <p>Worldwide delivery on all. Authorittively morph
              next-generation innovation with extensive models.</p>
          </div>
        </div>
        <div>
          <font-awesome-icon icon="crown" />
          <div>
            <h4>Quality assurance</h4>
            <p>Worldwide delivery on all. Authorittively morph
              next-generation innovation with extensive models.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="subscribe__block">
      <div class="reviews">
        <img src="https://i.ibb.co/9p7nyym/Layer-40.jpg" alt="review-author-pic">
        <div class="review">
          <p>"{{users[0].company.catchPhrase}}.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, cupiditate."</p>
          <p>{{users[0].name}}</p>
          <p>{{users[0].address.city}}</p>
        </div>
      </div>
      <div></div>
      <div class="subscribe"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posterAndSubcribe',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$root.getJson('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        data.forEach((element) => {
          this.users.push(element);
        });
      });
  },
};
</script>

<style scoped>
.poster__block {
     display: flex;
     width: 80%;
     margin: 0 auto;
     height: 33em;
 }

.poster__block-pic {
    background-image: url(https://i.ibb.co/P5VKv92/Layer-38.jpg);
    background-repeat: no-repeat;
    width: 48em;
}

.poster__block-pic > h3 {
    margin-top: 15%;
    margin-left: 5%;
    font-weight: 700;
    letter-spacing: 0.025em;
    font-size: 45px;
    color: #ffffff;
}

.poster__block-pic > h3 > span:first-of-type {
    color: #f16d7f;
}

.poster__block-pic > h3 > span:last-of-type {
    font-size: 32.2px;
}

.poster__block-desc {
    width: 30%;
    background-color: #222224;
    display: flex;
    flex-direction: column;
    color: #fbfbfb;
}

.poster__block-desc > div {
    width: 90%;
    margin: 0 auto;
    margin-top: 3em;
    display: flex;
    flex-direction: row;
}

.poster__block-desc > div > svg {
    width: 45px;
    height: 32px;
    color: #f16d7f;
    margin-right: 1em;
}

.poster__block-desc > div > div {
    display: flex;
    flex-direction: column;
}

.poster__block-desc h {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #fbfbfb;
}

.poster__block-desc p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    letter-spacing: 0.025em;
    color: #fbfbfb;
}

.subscribe__block {
    margin-top: 5em;
    background-image: url(https://i.ibb.co/wCBc1st/Layer-41.jpg);
    height: 27.375em;
    display: flex;
    flex-direction: row;
}

.reviews {
    display: flex;
    flex-direction: row;
    margin-left: 10%;
    margin-top: 7%;
}

.reviews > img {
    width: 5em;
    height: 5em;
    border-radius: 50%;
}

.review {
    display: flex;
    flex-direction: column;
    width: 25em;
    margin-left: 5%;
}

.review > p:first-of-type {
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.025em;
    color: #222224;
}

.review > p:nth-of-type(2) {
    margin-top: 1.2em;
    font-size: 16px;
    line-height: 26px;
    font-weight: 700;
    letter-spacing: 0.025em;
    color: #f16d7f;
}

.review >p:last-of-type {
    font-size: 12px;
    line-height: 14px;
    font-weight: 300;
    color: #222224;
}
</style>
