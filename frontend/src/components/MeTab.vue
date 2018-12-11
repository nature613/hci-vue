<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>          
          <SearchBar></SearchBar>
        </v-flex>
        <v-tabs fixed-tabs>
        <v-tab>
          내가 쓴 글
        </v-tab>
        <v-tab>
          내가 쓴 댓글
        </v-tab>
        <v-tab>
          내가 투표한 글
        </v-tab>
        <v-tab-item lazy="true">
          <MeContent></MeContent>
        </v-tab-item>
        <v-tab-item lazy="true">
          <MeComment></MeComment>
        </v-tab-item>
        <v-tab-item lazy="true">
          <MeVote></MeVote>
        </v-tab-item>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'
import MeContent from './MeContent.vue'
import MeComment from './MeComment.vue'
import MeVote from './MeVote.vue'

export default {
  name: 'MeTab',
  components:{
    Toolbar,
    SearchBar,
    MeContent,
    MeComment,
    MeVote
  },
  data:function(){
    return{
      tab:[
        { id : 1, name: '내가 쓴 글' ,path:'me-content'},
        { id : 2, name: '내가 쓴 댓글', path:'me-comment'},
        { id : 3, name: '내가 투표한 글', path:'me-vote'}
      ],
    }
  },
  methods:{
    meNav:function(address){
      this.$router.push(`/${address}`)
    }
  }
}
</script>
<style>

</style>
 
