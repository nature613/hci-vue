<template>
  <div>
    <Toolbar></Toolbar>
    <SearchBar></SearchBar>
    <!-- <v-container>
      <v-layout row>
        <v-flex>
          <router-link to="/me-one"><v-btn block>내가 쓴 글</v-btn></router-link>
        </v-flex>
        <v-flex>
          <router-link to="/me-two"><v-btn block>내가 쓴 댓글</v-btn></router-link>
        </v-flex>
        <v-flex>
          <router-link to="/"><v-btn block>내가 투표한 글</v-btn></router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <router-view/> -->


    <v-tabs fixed-tabs>
      <v-tab
        v-for="n in 3"
        :key="n"
      >
        Item {{ n }}
      </v-tab>
    </v-tabs>

  <v-menu
    :close-on-content-click="false"
    v-model="menu2"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <v-text-field
      slot="activator"
      v-model="date"
      label="Picker without buttons"
      prepend-icon="event"
      readonly
    ></v-text-field>
    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
  </v-menu>

  </div>
</template>
<script>

import Toolbar from './Toolbar.vue'
import SearchBar from './Searchbar.vue'

export default {
  name: 'Me',
  components:{
    Toolbar,
    SearchBar
  }
}
</script>
<style>

</style>
 