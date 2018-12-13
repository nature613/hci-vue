<template>
  <div>
   <v-toolbar dark color="primary">
     <v-layout row>
       <v-flex xs4>
        <v-btn @click="$router.go(-1)" icon>
          <v-icon>arrow_back</v-icon>
        </v-btn>
       </v-flex>
       <v-flex xs4>
         <v-toolbar-title class="white--text"><v-btn flat href="/simple-deep">Modoo</v-btn></v-toolbar-title>
       </v-flex>
       <v-flex xs4>

       </v-flex>
     </v-layout>
  </v-toolbar>
  </div>
</template>
<script>

export default {
  name: 'ToolbarSign',
  components:{
   
  },
  data:function(){
    return {
      }
  },
  // computed:{
  //   getUserName:function(){
  //     this.userName = this.$session.get('userName')
  //   }
  // },
}
</script>
<style>

</style>
