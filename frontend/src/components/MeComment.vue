<template>
  <div>
    <!-- <v-container>
      <v-layout column>
        <v-flex xs12>
          <SearchBar></SearchBar>
        </v-flex>
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


      </v-layout>
    </v-container> -->


    내가 쓴 댓글
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'MeComment',
  components:{
    SearchBar,
  }
}
</script>
<style>

</style>
 