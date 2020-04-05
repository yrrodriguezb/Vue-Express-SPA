<template>
  <div class="content">
    <div v-if="!isAuthenticated">
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                v-model="username"
                class="input"
                type="text"
                placeholder="Your username"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                v-model="password"
                class="input"
                type="password"
                placeholder="Your password"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button
                class="button is-primary"
                @click="login"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Bienvenido {{ user.name }}

      <div class="field-body">
        <div class="field">
          <div class="control">
            <button
              class="button is-primary"
              @click="logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appService from '../app.service'

export default {
  data () {
    return {
      username: '',
      password: '',
      isAuthenticated: false,
      profile: null,
      user: {
        name: '',
        last_login: ''
      }
    }
  },
  watch: {
    isAuthenticated: function(value, oldvalue) {
      this.isAuthenticated = value;
      if (value) {
        appService.getProfile()
          .then(profile => this.profile = profile)
          .catch(err => console.error)
      }
    }
  },
  created() {
    let expiration = localStorage.getItem('tokenExpitation')
    let unixTimestamp = new Date().getTime() / 1000;

    if (expiration !== null && (parseInt(expiration) - unixTimestamp) > 0) {
      this.isAuthenticated = true;
    }

    this.isAuthenticated = false;
  },
  methods: {
    login() {
      appService.login({ username: this.username, password: this.password })
        .then(data => {
          localStorage.setItem('token', data.token)
          localStorage.setItem('tokenExpiration', data.tokenExpiration)
          this.user = data.user
          this.isAuthenticated = true
          this.username = ''
          this.password = ''
        })
        .catch(() => this.isAuthenticated = false)
    },
    logout() {
      localStorage.setItem('token', null)
      localStorage.setItem('tokenExpiration', null)
      this.isAuthenticated = false
    }
  }
}
</script>
