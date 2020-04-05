<template>
  <nav class="navbar has-shadow is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          to="/"
          exact
        >
          <img
            src="https://bit.ly/vue-img"
            alt="Vue SPA"
          >
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link
            to="/category/front-end"
            exact
            class="navbar-item"
          >
            Front End
          </router-link>

          <router-link
            :to="{ name: 'category', params: { id: 'mobile' } }"
            exact
            class="navbar-item"
          >
            Mobile
          </router-link>

          <router-link
            to="/login"
            exact
            class="navbar-item"
          >
            Login
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
