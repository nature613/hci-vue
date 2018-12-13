<template>
  <div>
    <Toolbar/>
    <v-container>
      <v-layout id="simpleDeepLayout" row>
        <v-flex xs6>
          <v-btn class="simpleDeepBtn" id="simpleBtn" href="/simple" block>simple</v-btn>
        </v-flex>
        <v-flex xs6>
          <v-btn class="simpleDeepBtn" id="deepBtn" href="/deep" block >deep</v-btn>
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
  },
  // beforeCreate: function(){
  //   if (!this.$session.exists()) {
  //     this.$router.push('/') 
  //   }
  // },
  methods:{
    logout:function(){
      this.$session.destroy() 
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
  #simpleDeepLayout{
    height:570px;
  }
  .simpleDeepBtn{
    height:100%;
  }
  #simpleBtn{
    background-color: #E4FFEB;
  }
  #deepBtn{
    background-color: #FFDBD7;
  }

</style>
