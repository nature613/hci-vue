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

        <v-card>
        <v-data-table :items="deepList" class="elevation-1" hide-actions :headers="headers">
          <template slot="items" slot-scope="props">
            <tr :active="props.selected" class="text-xs-center">
             
              <td @click="deepContentView(props.item)">{{props.item.title}}</td>
              <td @click="deepCommentView(props.item)"><v-icon>comment</v-icon></td>
              <td @click="deepStatsView(props.item)"><v-icon>equalizer</v-icon></td>
              
              <!-- <td @click="depost(props.item)">
                <v-btn flat>
                  <v-icon>delete_sweep</v-icon>
                </v-btn>
              </td>
              <td @click="postview(props.item)">
                <v-btn flat>
                  <v-icon>visibility</v-icon>
                </v-btn> 
              </td> -->
            </tr>
          </template>
        </v-data-table>
      </v-card>

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
      deepList : null,
      headers:[
        {
          text : "제목",
          sortable: false,
          align: 'center'
        },
        {
          text : '댓글',
          sortable: false,
        },
        {
          text : '통계',
          sortable: false,
        }
      ],
      items : ''
    }
  },
  methods:{
    getDeepList:function(){
      this.$http.post('/deep/read').then((response)=>{
        console.log(response)
        console.log(response.data)
        this.deepList = response.data.slice().reverse()
        this.items = response.data.slice().reverse()
      })
    },  
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
