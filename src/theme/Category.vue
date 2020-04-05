<template>
  <div class="columns">
    <div
      v-for="post in posts"
      :key="post.id"
      class="column is-one-third"
    >
      <app-post
        :post="post"
        :link="post.link"
      >
        <h3 slot="content">
          {{ post.title }}
        </h3>
        <span slot="content">{{ post.content }}</span>
      </app-post>
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";

export default {
  components: {
    'app-post': Post
  },
  data() {
    return {
      id: this.$route.params.id,
      postsFrontEnd: [
        { id: 1, title: "PWA Stats", content: "A community-driven list of stats and news realated to Progressive Web Apps", link: "#" },
        { id: 2, title: "A comnprehensive Guide To HTT/2 server push", content: "No longer is HTTP/2 a feature we pine for. It has arrived, andwith comes server push!", link: "#" },
        { id: 3, title: "So what's this GraphQL thing I keep hearing about?", content: "Why now is the érfect time to learn what exactly this GraphQL thing you keep hearing about really is", link: "#" }
      ],
      postsMobile: [
        { id: 4, title: "State of The Mobile Gap between native and web", content: "A community-driven list of stats and news realated", link: "#" },
        { id: 5, title: "Learning JavaScript Designe Pattern", content: "Design patterns are  reusable", link: "#" },
        { id: 6, title: "The power of  custom directives in Vue", content: "The beautfull things about directives", link: "#" }
      ],
      posts: []
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.loadPosts();
    }
  },
  created() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      if (this.id === 'front-end') {
        this.posts = this.postsFrontEnd
      } else {
        this.posts = this.postsMobile;
      }
    }
  }
}
</script>
