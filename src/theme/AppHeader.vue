<template>
  <nav class="navbar has-shadow is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          to="/"
          exact
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            alt="Vue SPA"
            height="30px"
            width="100px"
          >
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link
            to="/category/adventure"
            exact
            class="navbar-item"
          >
            Adventure
          </router-link>

          <router-link
            :to="{ name: 'category', params: { id: 'action' } }"
            exact
            class="navbar-item"
          >
            Action
          </router-link>

          <router-link
            to="/login"
            exact
            class="navbar-item"
          >
            <span v-if="!isAuthenticated">Login</span>
            <span v-else>Logout</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  }
}
</script>
