(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de060988"],{2719:function(e,t,s){},"3f80":function(e,t,s){},"663b":function(e,t,s){"use strict";var r=s("3f80"),i=s.n(r);i.a},7542:function(e,t,s){"use strict";var r=s("c8e9"),i=s.n(r);i.a},c8e9:function(e,t,s){},daca:function(e,t,s){"use strict";var r=s("2719"),i=s.n(r);i.a},e6dc:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"products-head"},[s("div",{staticClass:"products-head-els"},[s("h1",[e._v(e._s(e.$route.params.type.replace(/-/g," ")))]),s("p",[s("router-link",{staticClass:"link",attrs:{to:"/products"}},[e._v(e._s(e.$route.path.slice(1,10)))]),e._v(" "),s("span",[e._v(e._s(e.$route.path.slice(10)))])],1)])]),s("div",{staticClass:"products-container"},[s("filterprodcomp",{attrs:{sortProducts:e.sortProducts}}),s("div",{staticClass:"products-container-block"},[s("sortprodcomp",{attrs:{sortProducts:e.sortProducts}}),s("productsview",{ref:"productsview",attrs:{keys:"sort_class",values:e.$route.params.type,showSorted:!1}})],1)],1)])},i=[],o=s("5530"),c=s("47da"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"products-filters"},[s("h3",{on:{click:function(t){e.showCats=!e.showCats}}},[e._v("Category "),s("font-awesome-icon",{attrs:{icon:"caret-down"}})],1),s("transition",{attrs:{name:"slide"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:e.showCats,expression:"showCats"}],staticClass:"category-list"},e._l(e.categories,(function(t){return s("li",{key:t.title,on:{click:function(s){return e.sort(t)}}},[e._v(" "+e._s(t.title)),e.checkedFilter===t.type?s("font-awesome-icon",{attrs:{icon:"check"}}):e._e()],1)})),0)]),s("h3",{on:{click:function(t){e.showBrands=!e.showBrands}}},[e._v("Brand "),s("font-awesome-icon",{attrs:{icon:"caret-down"}})],1),s("transition",{attrs:{name:"slide"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:e.showBrands,expression:"showBrands"}],staticClass:"brand-list"},e._l(e.brands,(function(t){return s("li",{key:t.title,on:{click:function(s){return e.sort(t)}}},[e._v(" "+e._s(t.title)),e.checkedFilter===t.type?s("font-awesome-icon",{attrs:{icon:"check"}}):e._e()],1)})),0)]),s("h3",{on:{click:function(t){e.showDesig=!e.showDesig}}},[e._v("Designer "),s("font-awesome-icon",{attrs:{icon:"caret-down"}})],1),s("transition",{attrs:{name:"slide"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:e.showDesig,expression:"showDesig"}],staticClass:"designer-list"},e._l(e.designers,(function(t){return s("li",{key:t.title,on:{click:function(s){return e.sort(t)}}},[e._v(" "+e._s(t.title)),e.checkedFilter===t.type?s("font-awesome-icon",{attrs:{icon:"check"}}):e._e()],1)})),0)])],1)},n=[],p={name:"filterprodcomp",props:["sortProducts","filterProducts"],data:function(){return{categories:[{title:"Accessories",type:"accoseriese",sort_type:"category"},{title:"Bags",type:"bags",sort_type:"category"},{title:"Denim",type:"denim"},{title:"Hoodies & Sweatshirts",type:"hoodies",sort_type:"category"},{title:"Jackets & Coats",type:"jackets",sort_type:"category"},{title:"Pants",type:"pants",sort_type:"category"},{title:"Polos",type:"polos",sort_type:"category"},{title:"Shirts",type:"shirts",sort_type:"category"},{title:"Shoes",type:"shoes",sort_type:"category"},{title:"Shorts",type:"shorts",sort_type:"category"},{title:"Sweaters & Knits",type:"sweaters",sort_type:"category"},{title:"T-Shirts",type:"t-shirts",sort_type:"category"},{title:"Tanks",type:"tanks",sort_type:"category"}],brands:[{title:"Mango",type:"Mango",sort_type:"brand"},{title:"Banana",type:"Banana",sort_type:"brand"},{title:"Grape",type:"Grape",sort_type:"brand"},{title:"Apple",type:"Apple",sort_type:"brand"},{title:"Peach",type:"Peach",sort_type:"brand"}],designers:[{title:"Mango",type:"Mango",sort_type:"brand"},{title:"Banana",type:"Banana",sort_type:"brand"},{title:"Grape",type:"Grape",sort_type:"brand"},{title:"Apple",type:"Apple",sort_type:"brand"},{title:"Peach",type:"Peach",sort_type:"brand"}],showCats:!0,showDesig:!1,showBrands:!1,checkedFilter:""}},methods:{sort:function(e){this.checkedFilter=e.type,this.sortProducts(e)}}},l=p,d=(s("7542"),s("2877")),u=Object(d["a"])(l,a,n,!1,null,"0512ee85",null),h=u.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"products-sort"},[e._m(0),s("div",[s("h4",[e._v("Size")]),s("div",e._l(e.sizes,(function(t){return s("p",{key:t.type},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedSizes,expression:"checkedSizes"}],attrs:{type:"checkbox",name:t},domProps:{value:t,checked:Array.isArray(e.checkedSizes)?e._i(e.checkedSizes,t)>-1:e.checkedSizes},on:{change:function(s){var r=e.checkedSizes,i=s.target,o=!!i.checked;if(Array.isArray(r)){var c=t,a=e._i(r,c);i.checked?a<0&&(e.checkedSizes=r.concat([c])):a>-1&&(e.checkedSizes=r.slice(0,a).concat(r.slice(a+1)))}else e.checkedSizes=o}}}),e._v(e._s(t.type))])})),0)]),s("div",[s("h4",[e._v("pRICE")]),s("div",{staticClass:"range-slider"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.prices.minPrice,expression:"prices.minPrice"}],attrs:{type:"range",min:"0",max:"100",step:"1"},domProps:{value:e.prices.minPrice},on:{change:e.setRange,__r:function(t){return e.$set(e.prices,"minPrice",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.prices.maxPrice,expression:"prices.maxPrice"}],attrs:{type:"range",min:"0",max:"100",step:"1"},domProps:{value:e.prices.maxPrice},on:{change:e.setRange,__r:function(t){return e.$set(e.prices,"maxPrice",t.target.value)}}})]),s("div",{staticClass:"range-prices"},[s("p",[e._v("$"+e._s(e.prices.minPrice))]),s("p",[e._v("$"+e._s(e.prices.maxPrice))])])]),s("button",{staticClass:"filter-btn",attrs:{value:"filter"},on:{click:function(t){return e.logger()}}},[s("p",[e._v("FILTER")])])])},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h4",[e._v("Trending now")]),s("div",[e._v("Bohemian | Floral | Lace Floral | Lace | Bohemian")])])}],m=(s("4160"),s("159b"),{name:"sortprodcomp",props:["sortProducts"],data:function(){return{sizes:[{type:"XXS",sort_type:"size"},{type:"XS",sort_type:"size"},{type:"S",sort_type:"size"},{type:"M",sort_type:"size"},{type:"L",sort_type:"size"},{type:"XL",sort_type:"size"},{type:"XXL",sort_type:"size"}],prices:{minPrice:0,maxPrice:100,sort_type:"price"},checkedSizes:[]}},computed:{sortByPrice:function(){return this.checkedSizes}},methods:{setRange:function(){if(this.prices.minPrice>this.prices.maxPrice||this.prices.maxPrice<this.prices.minPrice){var e=this.prices.maxPrice;this.prices.maxPrice=this.prices.minPrice,this.prices.minPrice=e}},logger:function(){var e=this;this.checkedSizes.length?this.checkedSizes.forEach((function(t){return e.sortProducts(t)})):this.sortProducts("showAll")}}}),v=m,f=(s("daca"),Object(d["a"])(v,y,_,!1,null,"891c9968",null)),g=f.exports,w=s("2f62"),k={computed:Object(o["a"])({},Object(w["c"])(["filteredProducts"])),name:"products",components:{productsview:c["a"],filterprodcomp:h,sortprodcomp:g},methods:{sortProducts:function(e){"category"===e.sort_type?this.$refs.productsview.filterByCategories(e):"size"===e.sort_type&&(console.log("sss"),this.$refs.productsview.filterBySize(e))}}},P=k,b=(s("663b"),Object(d["a"])(P,r,i,!1,null,"22a34476",null));t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-de060988.d12988ae.js.map