<template>
  <div>
    <Toolbar></Toolbar>
    <SearchBar></SearchBar>
   
     <v-container>
      <v-layout row>
        <v-flex>
          <router-link to="/me-content"><v-btn block>내가 쓴 글</v-btn></router-link>
        </v-flex>
        <v-flex>
          <router-link to="/me-comment"><v-btn block >내가 쓴 댓글</v-btn></router-link>
        </v-flex>
        <v-flex>
          <router-link to="/me-vote"><v-btn block color="secondary">내가 투표한 글</v-btn></router-link>
        </v-flex>
      </v-layout>
    </v-container>

    <p>Me-vote</p>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './Searchbar.vue'

export default {
  name: 'MeVote',
  components:{
    Toolbar,
    SearchBar,
  }
}
</script>
<style>

</style>
 