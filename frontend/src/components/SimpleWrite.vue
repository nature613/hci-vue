<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>          
          <SearchBar></SearchBar>
        </v-flex>
        <v-flex text-xs-center>
          <p class="pt-0 mt-0">simple 글쓰기</p>
        </v-flex>
        <v-flex>
          <v-textarea 
          solo
          v-model="simpleWriteContent"
          label="제목 : ex) 오늘 점심">
          </v-textarea>
        </v-flex>
        <v-flex>
          <v-text-field
            label="O : ex) 짜장"
            v-model="simpleWriteO"
            solo
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            label="X : ex) 짬뽕"
            v-model="simpleWriteX"
            solo
          ></v-text-field>
        </v-flex>
        <v-flex>
          
           <v-expansion-panel
              v-model="panel"
              expand
            >
              <v-expansion-panel-content
                v-for="(item, i) in 1"
                :key="i"
              >
                <div slot="header">
                  <v-layout column>
                    <v-flex>
                      투표자 추가 정보
                    </v-flex>
                  </v-layout>
                </div>
                <v-card>
                  <v-card-text class="grey lighten-3">
                    <v-layout column>
                      <v-flex>
                        <v-text-field
                          label="추가 정보 ex) 흡연 여부 , 해외경험유무"
                          v-model="simplePlusContent"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          label="ex)흡연 , O"
                          v-model="simplePlusO"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          label="ex)비흡연 , X"
                          v-model="simplePlusX"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                      
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>

        </v-flex>


        <v-dialog v-model="dialogSimpleWrite" persistent>
          <v-btn slot="activator" block >등록</v-btn>
          <v-card>
            <v-card-title class="headline">글 등록</v-card-title>
            <v-card-text>글을 등록하시겠습니까?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialogSimpleWrite = false">아니오</v-btn>
              <v-btn color="green darken-1" flat @click="simpleWriteProcess">네</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-layout>

      <!-- <p>*****test value*****</p>
      <p>simpleWriteContent {{simpleWriteContent}}</p>
      <p>simpleWriteO {{simpleWriteO}}</p>
      <p>simpleWriteX {{simpleWriteX}}</p>
      <p>simplePlusContent {{simplePlusContent}}</p>
      <p>simplePlusO {{simplePlusO}}</p>
      <p>simplePlusX {{simplePlusX}}</p>

      <p>*****test value*****</p> -->
    </v-container>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'

export default {
  name: 'SimpleWrite',
  components:{
    Toolbar,
    SearchBar
  },
  data:function(){
    return{
      simpleWriteContent : '',
      simpleWriteO : '',
      simpleWriteX : '',
      simplePlusContent : '',
      simplePlusO : 'O',
      simplePlusX : 'X',
      dialogSimpleWrite :  false
    }
  },
  methods:{
    simpleWriteProcess:function(){
      var userData = this.$session.get('userData')  
      var userId = userData.userId
      this.$http.post('/simple/write',
      {
        simpleWriteContent : this.simpleWriteContent,
        simpleWriteAuthor : userId,
        simpleWriteO : this.simpleWriteO,
        simpleWriteX : this.simpleWriteX,
        simplePlusContent : this.simplePlusContent,
        simplePlusO : this.simplePlusO,
        simplePlusX : this.simplePlusX
      }).then((response)=>{
        this.$router.push('/simple')
      })
    }
  },
  mounted:function(){
  }
}
</script>
<style>

</style>
