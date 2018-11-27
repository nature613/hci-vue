<template>
  <div>
   <v-toolbar dark color="primary">
    <v-btn icon>
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title class="white--text"><v-btn flat href="/simple-deep">LOGO</v-btn></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  </v-toolbar>

  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <!-- <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list> -->

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"

        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title><a href="http://localhost:8080">{{ item.title }}</a></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>

export default {
  name: 'Toolbar',
  components:{
   
  },
  data:function(){
    return {
        drawer: null,
        items: [
          { title: 'Simple', icon: 'dashboard' },
          { title: 'Deep', icon: 'question_answer' },
          { title: '내가 쓴 글/댓글'},
          { title: '내 정보 관리'},
          { title: '설정'},
          { title: '내 정보 관리'}
        ]
      }
    } 
}
</script>
<style>

</style>
