<template>
  <div>
      <v-layout column>
   
          <v-card>
            <v-card-text>
              <v-layout row>
                <v-flex>
                  <v-btn block>ㅎㅇ</v-btn>
                </v-flex>
                <v-flex>
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <v-btn  block slot="activator" color="primary" dark>댓글 조건 검색</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">댓글 필터링</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                              <v-text-field label="Legal first name*" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-text-field
                                label="Legal last name*"
                                hint="example of persistent helper text"
                                persistent-hint
                                required
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field label="Email*" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field label="Password*" type="password" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-select
                                :items="['0-17', '18-29', '30-54', '54+']"
                                label="Age*"
                                required
                              ></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-autocomplete
                                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                label="Interests"
                                multiple
                              ></v-autocomplete>
                            </v-flex>
                          </v-layout>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                </v-flex>
              </v-layout>
              
              
              
              <v-card>
                <v-data-table :items="commentList" class="elevation-1" hide-actions hide-headers :headers="headers">
                  <template slot="items" slot-scope="props">
                    <tr :active="props.selected" class="text-xs-center">
                    
                      <td>{{props.item.comment}}</td>
          
                      
                      <!-- <td @click="depost(props.item)">
                        <v-btn flat>
                          <v-icon>delete_sweep</v-icon>
                        </v-btn>
                      </td>
                      <td @click="postview(props.item)">
                        <v-btn flat>
                          <v-icon>visibility</v-icon>
                        </v-btn> 
                      </td> -->
                    </tr>
                  </template>
                </v-data-table>
              </v-card>









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
      commentList:'',
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
    // goDeepContent : function(){
    //   this.$router.push(`/deep-content/${this.$route.params.id}`)
    // },
    // goDeepStats : function(){
    //   this.$router.push(`/deep-stats/${this.$route.params.id}`)
    // },
  },
  mounted:function(){
    this.$http.post(`/deep/content/${this.$route.params.id}`).then((response)=>{
      this.commentList = response.data.commentList
    })
  }
}
</script>
<style>

</style>
 