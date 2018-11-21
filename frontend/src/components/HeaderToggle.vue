<template>
  <v-container id="b">
    <v-layout id="a" mx-0 row justify-center align-center>
      <v-flex xs4 text-xs-left>
        <a id="backBtn" href="javascript:history.back()">&#9668;</a>
      </v-flex>
      <v-flex xs4 text-xs-center>
        <h1><a href="/simple-deep">LOGO</a></h1>
      </v-flex>
       <v-flex xs4 text-xs-right> 
         <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
         >
          Toggle
        </v-btn>
        <i class="material-icons">
        menu
        </i>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style>
  #a{
   border-bottom : solid 1px black;
   height:8%;
  }
  #b{
    max-width: 100%;
    padding:0px;
    height : 100%;
  }
</style>
