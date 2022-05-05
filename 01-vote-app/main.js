const upVoteApp = {
  data() {
    return { submissions: Seed.submissions };
  },
};

Vue.createApp(upVoteApp).mount("#app");
