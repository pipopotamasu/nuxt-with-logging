<template>
  <div class="container">
    <h1><nuxt-link to='/show' >ユーザ一覧</nuxt-link></h1>
    <ul>
      <li v-for="(user, i) in users" :key="i">
        <nuxt-link to='/show' >
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data () {
    return {
      users: []
    }
  },
  async asyncData ({ $axios }) {
    try {
      const res = await $axios.$get('https://qiita.com/api/v2/users');
      // console.log(res)
      return { users: res.data }
    } catch (err) {

    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
