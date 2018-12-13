<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>          
          <SearchBar></SearchBar>
          {{searchSimpleList}}
          {{searchDeepList}}
        </v-flex>
      </v-layout>
    </v-container>
    
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'
export default {
  name: 'SearchResult',
  components:{
    Toolbar,
    SearchBar
  },
  data:function(){
    return{
      searchSimpleList  : '',
      searchDeepList : ''
    }
  },
  methods:{

  },
  mounted:function(){
    this.$http.post(`/search/simple/${this.$route.params.search}`).then((response)=>{
      console.log(response.data)
      this.searchSimpleList = response.data
      this.$http.post(`/search/deep/${this.$route.params.search}`).then((response)=>{
        console.log(response.data)
        this.searchDeepList = response.data
      })
    })
  }
}
</script>
<style>

</style>
 