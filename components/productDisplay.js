app.component('product-display',{

    props:{
premium:{
    type:Boolean,
    required:true
}
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img :src="image" alt="">
      </div>
      <div class="product-info">
        <h1>{{title }}</h1>
        <!-- v-show for just handling visibility, element is not removed
        
        v-else-if
        -->
        
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping:{{shipping}}</p>
        <ul>
          <!--- (size, index) in sizesArray  :key="index"  -->
          <li v-for="detail in details" >{{detail}}</li>
        </ul>
        <div v-for="(variant,index) in variants" :key="variant.id"
        
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{backgroundColor:variant.color}"
        ></div>
        <!-- v-on: or shortcommand is @  -->
        <!-- v-on:click="addToCart" -->
        
        <button class="button"
        :class="{disabledButton:!inStock}"
        :disabled="!inStock"
        
        @click="addToCart"
        

        >Add to Cart</button>
      </div>
    </div>
  </div>`,

  data(){
    return{
        
        product:'Socks',
        brand: 'Vue Mastery',
        description:"A warm Sock by Cowler Inc",
      selectedVariant:0,
      
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0 },
          ]
    
    }
        },
        methods:{
            addToCart(){
                this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
            },
            updateVariant(index){
    
    this.selectedVariant=index;
    // console.log(index)
    
            }
        }
    ,
    computed:{
        title(){
            return this.brand+' '+this.product
        },
        image(){
    return this.variants[this.selectedVariant].image
        },
        inStock(){
           // this also works return this.variants[this.selectedVariant].quantity>0
    
           return this.variants[this.selectedVariant].quantity
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return 2.99
        }
        
    }

})