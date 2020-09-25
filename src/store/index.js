import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state:  () => ({
        tweets: [
            { id: 1, name: 'Lisa Poliarush',nickName: '@Lisa81344188', tweetText: "Hello, world!", time: '15min', likes: 43 },
            { id: 2, name: 'Natalina',nickName: '@natalina_mua', tweetText: "hi!", time: '2h', likes: 3200 },
            { id: 3, name: 'Jeffree Star',nickName: '@jeffree_star', tweetText: "heey!", time: '54min', likes: 43723 },
        ],
    }),
    mutations: {

    },
    actions:{
        ADD_LIKE ({state}, id) {
            console.log(1)
            console.log(state.tweets.length)
            console.log(state.tweet.id)
            for (let index in state.tweets.length){
                console.log(2)   
                if(index.id === id){
                    state.tweets[index].likes++
                }
            }
            console.log(3)
        },
    },
})
export default store