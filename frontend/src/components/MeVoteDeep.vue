<template>
  <div>
    <v-card>
        <v-data-table :items="meVoteDeepList" class="elevation-1" hide-actions :headers="headers">
          <template slot="items" slot-scope="props">
            <tr :active="props.selected" class="text-xs-center">
             
              <td @click="deepContentView(props.item)">{{props.item.title}}</td>
              <td @click="deepCommentView(props.item)"><v-icon>comment</v-icon></td>
              <td @click="deepStatsView(props.item)"><v-icon>equalizer</v-icon></td>

            </tr>
          </template>
        </v-data-table>
      </v-card>
  </div>
</template>
<script>
export default {
  name: 'MeVoteDeep',
  components:{
    
  },
  data:function(){
    return{
      meVoteDeepList : null,
      headers:[
        {
          text : "제목",
          sortable: false,
          align: 'center'
        },
        {
          text : '댓글',
          sortable: false,
          align: 'center'
        },
        {
          text : '통계',
          sortable: false,
          align: 'center'
        }
      ],
      items : ''
    }
  },
  methods:{
    getMeVoteDeepList:function(){
      this.$http.post(`/deep/vote/${this.$session.get('userData').userId }`).then((response)=>{
        this.meVoteDeepList = response.data.slice().reverse()
        this.items = response.data.slice().reverse()
        console.log(this.meVoteDeepList)
        console.log(this.items)
      })
    },
    deepContentView:function(item){
      console.log("item")
      console.log(item._id)
      this.$router.push(`/deep-main/${item._id}/0`)
    },
    deepCommentView:function(item){
      console.log("item")
      console.log(item)
      this.$router.push(`/deep-main/${item._id}/1`)
    },
    deepStatsView:function(item){
      console.log("item")
      console.log(item)
      this.$router.push(`/deep-main/${item._id}/2`)
    },

  },
  mounted:function(){
    var userData = this.$session.get('userData')  
    this.userId = userData.userId
    this.getMeVoteDeepList()
  }
}
</script>
<style>

</style>
 