<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex>
          <v-text-field
            label="search"
            outline
          ></v-text-field>
        </v-flex>
        <v-flex text-xs-center>
          <h1>deep</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
export default {
  name: 'DeepWrite',
  components:{
    Toolbar
  }
}
</script>
<style>

</style>
