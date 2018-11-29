<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>          
          <SearchBar></SearchBar>
        </v-flex>
        <v-flex text-xs-center>
          <p class="pt-0 mt-0">simple</p>
        </v-flex>
        <v-flex>
          <v-textarea 
          solo
          v-model="simpleWriteContent"
          label="ex) 오늘 점심">
          </v-textarea>
        </v-flex>
        <v-flex>
          <v-text-field
            label="ex) 짜장"
            v-model="simpleWriteO"
            solo
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            label="ex) 짬뽕"
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
                  <v-card-text class="grey lighten-3">mm</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>


        </v-flex>
        <v-flex>
          <v-btn block @click="simpleWriteProcess">등록</v-btn>
        </v-flex>
      </v-layout>

      <p>*****test value*****</p>
      <p>simpleWriteContent {{simpleWriteContent}}</p>
      <p>simpleWriteO {{simpleWriteO}}</p>
      <p>simpleWriteX {{simpleWriteX}}</p>
      <p>*****test value*****</p>
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
      simpleWriteX : ''
    }
  },
  methods:{
    simpleWriteProcess:function(){
      this.$http.post('/write/simple',
      {
        simpleWriteContent : this.simpleWriteContent,
        simpleWriteO : this.simpleWriteO,
        simpleWriteX : this.simpleWriteX
      }).then((response)=>{
        this.$router.push('/simple')
      })
    }
  }
}
</script>
<style>

</style>
