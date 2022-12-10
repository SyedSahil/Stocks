import Main from './components/main.vue';
import Portfolio from './components/portfolio.vue'
import Stocks from './components/stocks.vue'

export const routes = [
    {path:'/',component:Main},
    {path:'/portfolio',component:Portfolio},
    {path:'/stocks',component:Stocks}
]