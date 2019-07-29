<template>
  <div class="container">
    <h1>ユーザ詳細</h1>
    <span>{{ user.id }}</span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user: {}
    }
  },
  async asyncData ({ params }) {
    const res = await axios.get('https://qiita.com/api/v2/users');
    return { user: res.data[0] }
  }
}
</script>
