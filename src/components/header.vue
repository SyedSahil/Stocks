<template>
    <div class="wrapper">
        <div class="header-container">
            <div class="left">
                <router-link :style="{fontSize:'28px'}" tag="li" to="/">
                 Stock Trader
                </router-link>
                <router-link tag="li" to="/portfolio">Portfolio</router-link>
                <router-link tag="li" to="/stocks">Stocks</router-link>
            </div>
            <div class="right">
                <li @click="endDay">End Day</li>
                <li>Save & Load</li>
                <p>Funds:${{funds}}</p>
            </div>
           
        </div>
    </div>

</template>


<script>
export default {
    data(){
        return {
            
        }
    },
    computed:{
        funds(){
            return this.$store.state.funds
        }
    },
    methods:{
        endDay(){
            this.$store.commit('endDay');
        }
    }
}
</script>


<style scoped>
.header-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 30px 40px; 
    border: 1px solid grey;
    background-color: rgb(251, 251, 251);
    border-radius: 5px;
}

.left,
.right{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    font-size: 20px;
    color: rgb(54, 52, 52);
}

li{
    list-style-type: none;

}
li:hover{
    cursor: pointer;
    color:black
}

</style>