<template>
    <div class="wrapper">
        <div class="container"  v-for="(stock,index) in stocks" :key="index">
            <div class="header">
                <h2>{{stock.name}} <span :style="{fontSize:'16px',fontWeight:'normal'}">(Price:{{stock.price}})</span></h2>
                
            </div>
            <div class="buy">
                <input type="text" name="quantity" placeholder="Quantity" v-model=value[index]>
                <button @click="buyStocks(stock,index)">Buy</button>
            </div>
        </div>
    </div>
    
    
    </template>
    
    
    <script>
    export default {

        data(){
            return {
                value:[]
            }
        },
        methods:{
            buyStocks(stock,index){    
               if((stock.price * this.value[index]) > this.$store.state.funds){
                return alert("Not enough funds!")
               }

            this.$store.commit('boughtStock',{
                quantity:parseInt(this.value[index],10),
                stock
            })
            }
        },
        computed:{
            stocks(){
                return this.$store.state.stocks
            }
        }
    }
    </script>
    
    <style scoped>

    .wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 30vw;
        border: 1px solid green;
        border-radius: 5px;
        margin: 40px;
    }
    
    .header{
        width: 100%;
        background-color: rgb(171, 205, 171);
        margin-bottom: 20px;
        border-radius: 5px;
         
    }
    
    .buy{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 100%;
        padding: 10px;
        
        
    }
    
    button{
        padding: 10px 12px;
        font-size: 18px;
        border-radius: 5px;
        border: 1px solid green;
        background-color: rgb(162, 197, 162);
        margin-left: 130px;
    }
    
    button:hover{
        cursor: pointer;
    }
    
    input{
        font-size: 18px;
        border-radius: 5px;
        border: 1px solid green;
        padding: 8px 12px;
    }
    </style>