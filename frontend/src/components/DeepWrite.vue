<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>
          <SearchBar></SearchBar>
        </v-flex>
        <v-flex text-xs-center>
          <p class="pt-0 mt-0">deep 글쓰기</p>
        </v-flex>
        <v-flex>
          <v-card>
            <v-cart-text>
              <v-container>
              <v-layout column>
                <v-flex>
                  <v-text-field
                    label="제목"
                    v-model="deepWriteTitle"
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-textarea
                    box
                    label="세부내용"
                    v-model="deepWriteContent"
                  ></v-textarea>
                </v-flex>
                <v-flex>
                  <v-text-field
                    label="O"
                    v-model="deepWriteO"
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    label="X"
                    v-model="deepWriteX"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              </v-container>
            </v-cart-text>
          </v-card>
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
                          v-model="deepPlusContent"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          label="ex)흡연 , O"
                          v-model="deepPlusO"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          label="ex)비흡연 , X"
                          v-model="deepPlusX"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                      
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>
        <v-flex>
          <v-btn block @click="deepWriteProcess">등록</v-btn>
          <p>**********test value**********</p>
          <p>deepWriteTitle {{deepWriteTitle}}</p>
          <p>deepWriteContent {{deepWriteContent}}</p>
          <p>deepWriteO {{deepWriteO}}</p>
          <p>deepWriteX {{deepWriteX}}</p>
          <p>deepPlusContent {{deepPlusContent}}</p>
          <p>deepPlusO {{deepPlusO}}</p>
          <p>deepPlusX {{deepPlusX}}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'
export default {
  name: 'DeepWrite',
  components:{
    Toolbar,
    SearchBar
  },
  data:function(){
    return{
      deepWriteTitle : '',
      deepWriteContent : '',
      deepWriteO : '',
      deepWriteX : '',
      deepPlusContent : '',
      deepPlusO : '',
      deepPlusX : '',
    }
  },
  methods:{
    deepWriteProcess:function(){
      this.$http.post('/deep/write',
      {
        deepWriteTitle : this.deepWriteTitle,
        deepWriteContent : this.deepWriteContent,
        deepWriteO : this.deepWriteO,
        deepWriteX : this.deepWriteX,
        deepPlusContent : this.deepPlusContent,
        deepPlusO : this.deepPlusO,
        deepPlusX : this.deepPlusX
      }).then((response)=>{
        this.$router.push('/deep')
      })
    }
  }
}
</script>
<style>

</style>
