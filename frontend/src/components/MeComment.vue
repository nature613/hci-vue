<template>
  <div>
    <v-card>
        <v-data-table :items="myCommentList.slice().reverse()" class="elevation-1" hide-actions hide-headers>
          <template slot="items" slot-scope="props">
            <tr :active="props.selected" class="text-xs-center" >
             
              <td>{{props.item.comment}}</td>
              <td @click="goDeepContent(props.item.contentId)"><u>본문보기</u></td>
              
            </tr>
          </template>
        </v-data-table>
      </v-card>
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'MeComment',
  components:{
    SearchBar,
  },
  data:function(){
    return{
      myCommentList : '',
    }
  },
  methods:{
    getMyCommentList:function(){
      this.$http.post(`/deep/my-comment/${this.$session.get('userData').userId }`).then((response)=>{
        this.myCommentList = response.data
      })
    },
    goDeepContent:function(contentId){
      this.$router.push(`/deep-main/${contentId}/0`)
    }
  },
  mounted:function(){
    this.getMyCommentList()
  }
}
</script>
<style>

</style>
 