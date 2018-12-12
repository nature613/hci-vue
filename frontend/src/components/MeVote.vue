<template>
  <div>
    <v-tabs fixed-tabs>
      <v-tab>simple</v-tab>
      <v-tab>deep</v-tab>
      <v-tab-item lazy="true">
        <MeVoteSimple></MeVoteSimple>
      </v-tab-item>
      <v-tab-item lazy="true">
        <MeVoteDeep></MeVoteDeep>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'
import MeVoteSimple from './MeVoteSimple.vue'
import MeVoteDeep from './MeVoteDeep.vue'


export default {
  name: 'MeVote',
  components:{
    SearchBar,
    MeVoteSimple,
    MeVoteDeep
  }
}
</script>
<style>

</style>
 