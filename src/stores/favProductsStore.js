import { defineStore } from "pinia";
import {products} from "@/data/products.js"

export const useFavProductsStore = defineStore("favCart" , 
    {
        state : ()=>({
        products,
        favCart:[],
    }),
    getters:{
        favoriteProducts(state) {
            return state.products.filter(product => product.isfav === true)
          }
    }
    ,
        actions :{
            addToFavCart(product){
                console.log("added to fav cart! ")
                this.favCart.push(product)
            },
            removeFromFavCart(product){
                console.log("product was deleted from fav cart!")
                this.favCart= this.favCart.filter(item => item.id !== product.id);
            }
        },
        persist:{
            storage:localStorage
        }
}
)