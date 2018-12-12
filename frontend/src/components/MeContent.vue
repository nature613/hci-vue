<template>
  <div>
    <v-tabs fixed-tabs>
      <v-tab>simple</v-tab>
      <v-tab>deep</v-tab>
      <v-tab-item lazy="true">
        <MeSimple></MeSimple>
      </v-tab-item>
      <v-tab-item lazy="true">
        <MeDeep></MeDeep>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>

import SearchBar from './SearchBar.vue'
import MeSimple from  './MeSimple.vue'
import MeDeep from './MeDeep.vue'

export default {
  name: 'MeContent',
  components:{
    SearchBar,
    MeSimple,
    MeDeep
  },
  data:function(){
    return{
    }
  },
  methods:{
  }
}
</script>
<style>

</style>
 