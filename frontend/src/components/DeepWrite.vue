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
            <v-card-title>
              <v-text-field
                label="제목"
              ></v-text-field>
            </v-card-title>
            <v-cart-text>
              <v-container>
              <v-layout column>
                <v-flex>
                  <v-textarea
                    box
                    label="세부내용"
                    v-model="a"
                  ></v-textarea>
                </v-flex>
                <v-flex>
                  <v-text-field
                    label="O"
                    v-model="a"
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    label="X"
                    v-model="a"
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
        <v-flex>
          <v-btn block>등록</v-btn>
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
  }
}
</script>
<style>

</style>
