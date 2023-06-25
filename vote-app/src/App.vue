<script lang="ts">
import { defineComponent } from "vue";
import SubmissionType from "./types/SubmissionType";

import Submission from './components/VoteSubmission.vue'

export default defineComponent({
  components: {
    Submission
  },
  computed : {
    sortedSubmission(): SubmissionType[]{
      return this.submissions.sort((a ,b) => b.votes - a.votes);
    }
  },
  data(){
    return {
      submissions : [
        {
          id: 1,
          title: 'Yellow Pail',
          description: 'On-demand sand castle construction expertise.',
          url: '#',
          votes: 16,
          avatar: '../public/assets/images/avatars/daniel.jpg',
          // avatar : "../public/assets",
          submissionImage: '../public/assets/images/submissions/image-yellow.png'
        },
        {
          id: 2,
          title: 'Supermajority: The Fantasy Congress League',
          description: 'Earn points when your favorite politicians pass legislation.',
          url: '#',
          votes: 11,
          avatar: '../public/assets/images/avatars/kristy.png',
          submissionImage: '../public/assets/images/submissions/image-rose.png'
        },
        {
          id: 3,
          title: 'Tinfoild: Tailored tinfoil hats',
          description: 'We have your measurements and shipping address.',
          url: '#',
          votes: 17,
          avatar: '../public/assets/images/avatars/veronika.jpg',
          submissionImage: '../public/assets/images/submissions/image-steel.png'
        },
        {
          id: 4,
          title: 'Haught or Naught',
          description: 'High-minded or absent-minded? You decide.',
          url: '#',
          votes: 9,
          avatar: '../public/assets/images/avatars/molly.png',
          submissionImage: '../public/assets/images/submissions/image-aqua.png'
        }
      ]
    }
  },
  name : 'App',  
});

</script>

<template>  
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>

    <div class="section">
      <article class="media" 
        v-for="submission in sortedSubmission"
        :keu="submission.id"
        :class="{'blue-border':submission.votes >= 20}">
        <Submission
          :submission="submission"
          :sortedSubmissions="sortedSubmission"         
          />
      </article>
    </div>  
</template>

<style scoped>
</style>
