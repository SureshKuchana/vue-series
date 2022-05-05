const upVoteApp = {
  data() {
    return { submissions: Seed.submissions };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
};

Vue.createApp(upVoteApp).mount("#app");
