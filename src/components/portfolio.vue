<template>

<div class="wrapper">
    <div class="container" v-for="(stock,index) in portfolio" :key="index">
        <div class="header">
            <h2>{{stock.name}} <span :style="{fontSize:'16px',fontWeight:'normal'}">(Price:{{stock.price}}) | (Quantity:{{stock.quantity}})</span></h2>
            
        </div>
        <div class="buy">
            <input type="text" name="quantity" placeholder="Quantity" v-model="value[index]">
            <button @click="sellStock(stock,index)">Sell</button>
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
    computed:{
        portfolio(){
            return this.$store.state.portfolio
        }
    },
    methods:{
        sellStock(stock,index){

            if(this.value[index] > stock.quantity){
                return alert("Not enough stocks to sell");
            }

            this.$store.commit('soldStock',{
                quantity:this.value[index],
                stock,
                index:index
            })

        }
    }
}
</script>

<style scoped>
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
    background-color: rgb(201, 151, 151);
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
    background-color: rgb(201, 151, 151);   
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