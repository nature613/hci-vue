<template>
  <div>
    <v-tabs fixed-tabs>
      <v-tab
        v-for="item in tab"
        :key="item.id"
        @click="meNav(item.path)"
      >
        item.name
      </v-tab>
    </v-tabs>
  </div>
</template>
<script>

export default {
  name: 'MeTab',
  components:{
  },
  data:function(){
    return{
      tab:[
        {name: '내가 쓴 글' ,path:'me-content'},
        {name: '내가 쓴 댓글', path:'me-comment'},
        {name: '내가 투표한 글', path:'me-vote'}
      ]
    }
  },
  methods:{
    meNav:function(address){
      this.$router.push(`/${address}`)
    }
  }
}
</script>
<style>

</style>
 
