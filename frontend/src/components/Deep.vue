<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>
          <SearchBar></SearchBar>
        </v-flex>
        <v-flex mb-3>
          <v-btn href="/deep-write" block>
            글쓰기
          </v-btn>
        </v-flex>

         <v-expansion-panel
          v-model="panel"
          expand
        >
          <v-expansion-panel-content
            v-for="(item, i) in 20"
            :key="i"
          >
            <div slot="header">
              <v-layout column>
                <v-flex>
                  <div>짜장 짬뽕 </div>
                  <v-btn>통계보기</v-btn>
                </v-flex>
                <v-flex>
                  <v-btn block>투표하기 / 댓글쓰기</v-btn>
                  
                </v-flex>
              </v-layout>
            </div>
            <v-card>
              <v-card-text class="grey lighten-3">mm</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>


      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'

export default {
  name: 'Deep',
  components:{
    Toolbar,
    SearchBar
  }
}

</script>
<style>

</style>
