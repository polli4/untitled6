<template>
  <div class="status">
    <div class="all"
         v-for="tweet in $store.state.tweets"
         :key="tweet.id"
    >
      <div class="tweet-content">
          <img src="../assets/ylZ2QUferdo.jpg" class="logo"/>
        <div class="tweet">
          <a href="#">{{ tweet.name }}</a>
          <span> {{ tweet.nickName }} · {{ tweet.time }} </span>
          <p class="tweet-text">
            {{ tweet.tweetText }}
          </p>
          <div class="reactions like">
          <span
              class="like"
              @click="toggleLike(tweet.id)"
          >
            <span
                v-if="liked"
                class="likes"
            >
              ❤ <span class="l1">{{ tweet.likes }}</span>
            </span>
            <span v-else>♡ <span class="l1">{{ tweet.likes }}</span>
            </span>
          </span>
          </div>
        </div>
      </div>
      <div class="comment-bar">
      <textarea
          placeholder="tweet your reply"
          v-model="commentText"
          @input="countCharacters"
          :maxlength="limit"
      />
        <span class="characters-remaining">
        {{ charactersRemaining }} characters remaining
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
      return{
      commentText: '',
      charactersRemaining: 280,
      limit: 280,
      liked: false,
      countLikes: 0,
      like: 0,

    }
  },
  methods:{
    countCharacters(){
      this.charactersRemaining = 280 - this.commentText.length
    },
    toggleLike() {
      this.$store.dispatch('ADD_LIKE', this.id)
      this.liked = !this.liked
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tweet-content {
  display: flex;
  padding: 10px;
}
.status {
  width: 600px;
  margin: 20px auto;
  border-radius: 3px;
  background-color: white;
}
.logo {
  height: 75px;
  border-radius: 50%;
  padding: 5px;
}
a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
span {
  color: grey;
}
.comment-bar {
  background-color: #f5f8fa;
  padding: 10px;
  border-top: 1px solid #e6ecf0;
}

textarea {
  width: 100%;
  border: 1px solid #1DA1F2;
  border-radius: 2px;
  padding: 2px;
}
.characters-remaining {
  font-size: 12px;
}
.like {
  cursor: pointer;
  font-size: 25px;
}
.like :hover{
  color: #fa5757;
  border-radius: 50%;

}
.likes{
  color: #d74343;
}
.l1{
  font-size: 12px;
}

</style>
