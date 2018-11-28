<template>
  <div>
   <v-toolbar dark color="primary">
    <v-btn @click="$router.go(-1)" icon>
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
            <v-list-tile-title>{{userData.userName}}님 안녕하세요!</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list> -->

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="goNav(item.address)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title><v-btn>{{ item.title }}</v-btn></v-list-tile-title>
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
          { title: 'Simple', icon: 'dashboard', address: 'simple'},
          { title: 'Deep', icon: 'question_answer' ,address:'deep'},
          { title: '내가 쓴 글/댓글'},
          { title: '내 정보 관리'},
          { title: '설정'},
          { title: '로그아웃' , address: 'logout'}
        ],
        userData : null,
        jwt : null
      }
  },
  methods:{
    goNav: function(address){
      if(address === 'logout'){
        this.logout()
      }else{
      this.$router.push(`/${address}`)
      }
    },
    logout:function(){
      this.$session.destroy() 
      this.$router.push('/')
    }
  },
  created:function(){
    console.log("test1")
    console.log(this.$session.getAll())
    console.log("Test2")
    console.log(this.$session.get('jwt'))
    console.log("test3")
    console.log(this.$session.get('userData.userName'))
    console.log("test4")
    this.jwt= this.$session.get('jwt')
    this.userData = this.$session.get('userData')
    console.log(this.jwt)
    console.log("test5")
    console.log(this.userData)
  } ,
}
</script>
<style>

</style>
