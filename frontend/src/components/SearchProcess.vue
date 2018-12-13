<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>          
          <SearchBar></SearchBar>
        </v-flex>
      </v-layout>
    </v-container>
    
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'
export default {
  name: 'SearchProcess',
  components:{
    Toolbar,
    SearchBar
  },
  mounted:function(){
    this.$router.push(`/search-result/${this.$route.params.search}`)
  }
}
</script>
<style>

</style>
 