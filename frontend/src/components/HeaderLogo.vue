<template>
  <v-container id="b">
    <v-layout id="a" mx-0 row justify-center align-center>
      <v-flex xs4 text-xs-left>
      </v-flex>
      <v-flex xs4 text-xs-center>
        <h1>LOGO</h1>
      </v-flex>
       <v-flex xs4 text-xs-right>
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
