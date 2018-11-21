<template>
  <div>
    <Toolbar/>
    <v-container>
      <v-layout id="simpleDeepLayout" row>
        <v-flex xs6>
          <v-btn class="simpleDeepBtn" href="/simple" block>simple</v-btn>
        </v-flex>
        <v-flex xs6>
          <v-btn class="simpleDeepBtn" href="/deep" block >deep</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'

export default {
  name: 'SimpleDeep',
  components:{
    Toolbar
  },
  data: function(){
    return {
      
    }
  }
}
</script>
<style>
  #simpleDeepLayout{
    height:570px;
  }
  .simpleDeepBtn{
    height:100%;
  }
</style>
