
<script lang="ts">
import SubmissionType from '../types/SubmissionType';
import { defineComponent, defineProps } from "vue";

defineProps<{ submission: SubmissionType, sortedSubmissions : SubmissionType[]}>()

export default defineComponent({
  props: ['submission', 'sortedSubmissions'],
  methods: {
    upVote(id: number){
      const res : SubmissionType = this.sortedSubmissions.find((item: SubmissionType) => 
        item.id === id
      )
      res.votes++;
    }
  }
 })
</script>

<template>
    <div style="display: flex; width: 100%">
    <figure class="media-left">
      <img alt="" class="image is-64x64" :src="submission.submissionImage"/>
    </figure>
    <!-- <img alt="j" class="image is-64x64" :src="submission.submissionImage" /> -->
    <div class="media-content">
      <div class="content">
        <p>
          <strong> <a href="#" alt="img" src="submission.submissionImage">
            {{ submission.title }}
          </a> </strong>
          <br>
            {{ submission.description }}
          <br>
          <small class="is-size-7">
            Submitted by:
            <img class="image is-24x24"
              :src="submission.avatar">
          </small>
        </p>
      </div>
    </div>
    <div class="media-right">
      <span class="icon is-small" 
      @click="upVote(submission.id)"
      >
        <i class="fa fa-chevron-up"></i>
        <strong class="has-text-info">{{ submission.votes }}</strong>
      </span>
    </div>
  </div>
</template>
