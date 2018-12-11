<template>
  <div>
      <v-layout column>
        
          <v-card>
            <v-card-text>

            
              <v-layout column>
                <v-flex>
                  <p>{{title}}</p>
                </v-flex>
                <v-flex>
                  <p>{{content}}</p>
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
                <p>사용자 추가 정보</p>
                <v-layout row>
                  <v-flex>
                    <v-btn block>O</v-btn>
                  </v-flex>
                  <v-flex>
                    <v-btn block>X</v-btn>
                  </v-flex>
                </v-layout>
                <v-textarea
                    box
                    label="댓글"
                    v-model="writeComment"
                  ></v-textarea>
                  <v-btn block>댓글 작성</v-btn>
                  
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
      content: ''
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
 