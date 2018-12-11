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
          본문보기
        </v-tab>
        <v-tab>
          댓글보기
        </v-tab>
        <v-tab>
          통계보기
        </v-tab>
        <v-tab-item lazy="true">
          <DeepContent></DeepContent>
        </v-tab-item>
        <v-tab-item lazy="true">
          <DeepComment></DeepComment>
        </v-tab-item>
        <v-tab-item lazy="true">
          <DeepStats></DeepStats>
        </v-tab-item>
      </v-layout>
    </v-container>
    
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'
import DeepContent from './DeepContent.vue'
import DeepComment from './DeepComment.vue'
import DeepStats from './DeepStats.vue'
export default {
  name: 'MyPage',
  components:{
    Toolbar,
    SearchBar,
    DeepContent,
    DeepComment,
    DeepStats
  }
}
</script>
<style>

</style>
 