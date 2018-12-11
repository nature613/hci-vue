<template>
  <div>
      <v-layout column>
   
          <v-card>
            <v-card-text>
              <p>
                댓글 목록
              </p>
            </v-card-text>
          </v-card>
      </v-layout>
    
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'
export default {
  name: 'MyPage',
  components:{
    Toolbar,
    SearchBar
  },
  data:function(){
    return{
      title : '',
      content : '',
    }
  },
  methods:{
    goDeepContent : function(){
      this.$router.push(`/deep-content/${this.$route.params.id}`)
    },
    goDeepStats : function(){
      this.$router.push(`/deep-stats/${this.$route.params.id}`)
    },
  },
  mounted:function(){
    console.log(this.$route.params.id)
    this.$http.post(`/deep/content/${this.$route.params.id}`).then((response)=>{
    console.log(response.data)
    this.title = response.data.title
    this.content = response.data.content
    })
  }
}
</script>
<style>

</style>
 