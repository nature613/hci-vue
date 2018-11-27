<template>
  <div>
    <Toolbar></Toolbar>


    <h2>Me</h2>
    <div>
      <label>User Info:</label>
      <pre>{{user}}</pre>
    </div>
    <div>
      <!-- <label>Access Log:</label>
      <div v-for="log in accessLog" v-bind:key="log.id">{{log.userId}}, {{log.createdAt}}</div> -->
    </div>


  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
export default {
  name: 'Me',
  components:{
    Toolbar
  },
  data() {
    return {
      user: null,
      accessLog: []
    }
  },
  created() {
    this.$http.post('/user/me')
      .then(({data}) => (this.user = data.user, this.accessLog = data.accessLog))
  }
}
</script>
<style>

</style>
 