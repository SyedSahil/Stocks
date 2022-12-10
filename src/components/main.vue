<template>
<div class="wrapper">
    <div class="container">
        <div class="headings">
            <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a new Day!</p>
        </div>
        <div class="funds">
            <h2>Your Funds: ${{funds}}</h2>
        </div>
        
    </div>
</div>    
</template>

<script>
export default {
    data(){
        return {
            funds:this.$store.state.funds
        }
    }
}
</script>

<style scoped>
.container{
    border: 1px solid grey;
    margin: 45px 40px;
    border-radius: 5px;
    padding: 10px 35px;
    background-color: rgb(251, 251, 251);
}
</style>