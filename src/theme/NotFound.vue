<template>
  <section class="section is-medium">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column has-text-centered">
          <h1 class="title">
            404 Page Not Found
          </h1>
          <p class="subtitle">
            An unexpected error has occurred. Please contact the site owner.
          </p>
          <router-link
            to="/"
            exact
            class="button"
          >
            Home
          </router-link>

          <a class="button">
            Contact
          </a>
        </div>
        <div class="column has-text-centered">
          <img src="https://www.eastfieldcollege.edu/PublishingImages/Pages/PageNotFoundError/404-robot.gif">
        </div>
      </div>
    </div>
  </section>
</template>
