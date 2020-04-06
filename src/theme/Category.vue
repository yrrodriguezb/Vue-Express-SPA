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
import { mapGetters } from 'vuex'

export default {
  components: {
    'app-show': Show
  },
  computed: {
    ...mapGetters('showsModule', [
      'shows'
    ])
  },
  watch: {
    '$route' (to, from) {
      this.loadShows();
    }
  },
  created() {
    this.loadShows();
  },
  methods: {
    loadShows() {
      this.$store.dispatch('showsModule/updatedCategory', this.$route.params.id)
    }
  }
}
</script>
