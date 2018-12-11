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
            v-for="(item, i) in deepList.slice().reverse()"
            :key="i"
            expand-icon=""
          > 
            <div slot="header">
              <v-layout column>
                <v-layout row>
                  <v-flex>
                    {{item.title}}
                  </v-flex>
                  <v-flex>
                    <v-btn>통계보기</v-btn>
                  </v-flex>
                </v-layout>
                <v-btn block>투표하기 / 댓글쓰기</v-btn>
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
  },
  data:function(){
    return{
      deepList : null
    }
  },
  methods:{
    getDeepList:function(){
      this.$http.post('/deep/read').then((response)=>{
        console.log(response)
        console.log(response.data)
        this.deepList = response.data
      })
    }
  },
  mounted:function(){ 
    var userData = this.$session.get('userData')  
    this.userId = userData.userId
    this.getDeepList()
  }
}

</script>
<style>

</style>
