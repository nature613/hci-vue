<template>
  <div>
      <v-layout column>
        
          <v-card>
            <v-card-text>

            
              <v-layout column>
                <v-flex>
                  <p>{{deepContent.title}}</p>
                </v-flex>
                <v-flex>
                  <p>{{deepContent.content}}</p>
                </v-flex>
                <v-flex>
                  <p>O : {{deepContent.O}}</p>
                  <p>X : {{deepContent.X}}</p>
                </v-flex>
                <p>투표하기</p>
                <v-layout row>
                  <v-flex>
                    <v-btn block>O</v-btn>
                  </v-flex>
                  <v-flex>
                    <v-btn block>X</v-btn>
                  </v-flex>
                </v-layout>
                <p>사용자 추가 정보 - {{deepContent.plusContent}}</p>
                <v-layout row>
                  <v-flex>
                    <v-btn block>O</v-btn>
                  </v-flex>
                  <v-flex>
                    <v-btn block>X</v-btn>
                  </v-flex>
                </v-layout>
                <!-- <v-textarea
                    box
                    label="댓글"
                    v-model="writeComment"
                  ></v-textarea>
                  <v-btn block>댓글 작성</v-btn> -->
                  
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
      deepContent: ''
    }
  },
  methods:{
    goDeepComment : function(){
      this.$router.push(`/deep-comment/${this.$route.params.id}`)
    },
    goDeepStats : function(){
      this.$router.push(`/deep-stats/${this.$route.params.id}`)
    },
  },
  mounted:function(){
    this.$http.post(`/deep/content/${this.$route.params.id}`).then((response)=>{
    console.log(response.data)
    this.deepContent = response.data
    })
  }
}
</script>
<style>

</style>
 