import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export const store = new Vuex.Store({
state:{
    funds:1000,
    portfolio:[],
    stocks:[{name:'BMW',price:20},{name:'Apple',price:30 }]
},
mutations:{
    boughtStock(state,{quantity,stock}){
        state.funds -= quantity * stock.price;
        state.portfolio.push({
            name:stock.name,
            price:stock.price,
            quantity:quantity
           })
    },
    soldStock(state,{quantity,stock,index}){

        if(quantity == stock.quantity){
            state.portfolio.splice(index,1);
            return state.funds += quantity * stock.price;
        }


        state.funds += quantity * stock.price;
        console.log(state.portfolio);
        console.log(index);
        state.portfolio[index].quantity -= quantity

        

    },
    endDay(state){
        const rand = Math.floor(Math.random() * 20) - 10;
        state.stocks.forEach(stock => {
            stock.price += rand
        });
        state.portfolio.forEach(stock => {
            stock.price += rand
        })
        
    }
}
})