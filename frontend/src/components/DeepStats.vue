<template>
  <div>
      <v-layout column>
   
          

          <v-card>
            <v-card-text>

            
              <v-layout column>
                <v-tabs>
                  <v-tab
                    id="test"
                    v-for="i in tabList"
                    :key="i"
                  >
                    {{i.name}}
                    
                  </v-tab>
                  <v-tab-item lazy="true">
                    <v-card flat>
                      <v-card-text>
                        </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item lazy="true">
                    <v-card flat>
                      <v-card-text>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item lazy="true">
                    <v-card flat>
                      <v-card-text>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item lazy="true">
                    <v-card flat>
                      <v-card-text>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item lazy="true">
                    <v-card flat>
                      <v-card-text>
                        </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item lazy="true">
                    <v-card flat>
                      <v-card-text>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-layout>
            </v-card-text>
          </v-card>
        

      </v-layout>
    
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'
export default {
  name: 'MyPage',
  components:{
    Toolbar,
    SearchBar
  },
  data:function(){
    return{
      title : '',
      content : '',
      tabList : [
        {name : "전체"},
        {name : "성별"},
        {name : "나이대"},
        {name : "직업"},
        {name : "사는 곳"},
        {name : "추가정보"}
      ],
    }
  },
  methods:{
    goDeepComment : function(){
      this.$router.push(`/deep-comment/${this.$route.params.id}`)
    },
    goDeepContent : function(){
      this.$router.push(`/deep-content/${this.$route.params.id}`)
    },
  },
  mounted:function(){
      console.log(this.$route.params.id)
      this.$http.post(`/deep/content/${this.$route.params.id}`).then((response)=>{
      console.log(response.data)
      this.title = response.data.title
      this.content = response.data.content
    })
  }
}
</script>
<style>

</style>
 