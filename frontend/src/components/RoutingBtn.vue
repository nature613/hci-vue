<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex>
          <router-link to="/me-content"><v-btn block>내가 쓴 글</v-btn></router-link>
        </v-flex>
        <v-flex>
          <router-link to="/me-comment"><v-btn block color="secondary">내가 쓴 댓글</v-btn></router-link>
        </v-flex>
        <v-flex>
          <router-link to="/me-vote"><v-btn block>내가 투표한 글</v-btn></router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: '',
  components:{
    
  }
}
</script>
<style>

</style>
 