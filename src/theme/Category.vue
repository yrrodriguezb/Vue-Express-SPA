<template>
  <div class="columns">
    <div
      v-for="show in shows"
      :key="show.id"
      class="column is-one-third"
    >
      <app-show
        :show="show"
        :link="show.url"
      >
        <h3 slot="title">
          {{ show.name }}
        </h3>

        <span slot="content">
          {{ show.summary | htmlToString }}
        </span>
      </app-show>
    </div>
  </div>
</template>
<script>
import Show from "./Show.vue";
import appService from '../app.service.js';

export default {
  components: {
    'app-show': Show
  },
  data() {
    return {
      id: this.$route.params.id,
      shows: []
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.loadShows();
    }
  },
  created() {
    this.loadShows();
  },
  methods: {
    loadShows() {
      appService.getShows(this.id)
        .then(data => this.shows = data)
        .catch(err => console.error)
    }
  }
}
</script>
