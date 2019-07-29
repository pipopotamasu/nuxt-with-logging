<template>
  <div class="container">
    <h1>ユーザ詳細</h1>
    <span>{{ user.id }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  async asyncData ({ $axios }) {
    try {
      const res = await $axios.$get('https://qiita.com/api/v2/users');
      return { user: res.data[0] }
    } catch (err) {

    }
  }
}
</script>
