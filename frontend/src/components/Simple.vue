<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>          
          <SearchBar></SearchBar>
        </v-flex>
        <v-flex mb-3>
          <v-btn href="/simple-write" block>
            글쓰기 
          </v-btn>
        </v-flex>

         <v-expansion-panel
          v-model="panel"
          expand
        >
          <v-expansion-panel-content
            v-for="(item, i) in simpleList"
            :key="i"
            expand-icon=""
          >
            <div slot="header">
              <v-layout column>
                <v-layout justify-space-between row>
                  <h2 class="text-xs-center">{{item.content}} O : {{item.oVote}} X : {{item.xVote}}</h2>
                  <v-spacer></v-spacer>
                  <v-btn>통계보기</v-btn>
                  <!-- <v-flex xs-1>
                    <h2 class="text-xs-center">짬뽕 vs 짜장 </h2>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs-1>
                    <v-btn>통계보기</v-btn>
                  </v-flex> -->
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-btn @click="simpleVoteO(item._id)" block>{{item.O}}(O)</v-btn>
                  </v-flex>
                  <v-flex>
                    <v-btn @click="simpleVoteX(item._id)" block>{{item.X}}(X)</v-btn>
                  </v-flex>
                </v-layout>
              </v-layout>
            </div>
            <v-card>
              <v-card-text class="grey lighten-3">
                <v-tabs fixed-tabs>
                  <v-tab
                    v-for="n in 3"
                    :key="n"
                  >
                    Item {{ n }}
                    
                  </v-tab>
                  <v-tab-item
                    v-for="n in 3"
                    :key="n"
                  >
                  ddd
                    <v-card flat>
                      <v-card-text>hi</v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
                  <p>-------O/X-------</p>
                  <p>O : {{item.oVote}} {{item.oVote/(item.oVote+item.xVote)*100}}%</p>
                  <p>X : {{item.xVote}} {{item.xVote/(item.oVote+item.xVote)*100}}%</p>
                  <p>-------성별-------</p>
                  <p>남자 : {{item.gender.male}}</p>
                  <p>여자 : {{item.gender.female}}</p>
                  <p>-------직업-------</p>
                  <p>무직 : {{item.job.none}}</p>
                  <p>중학생 : {{item.job.middle}}</p>
                  <p>고등학생 : {{item.job.high}}</p>
                  <p>대학생 : {{item.job.univ}}</p>
                  <p>주부 : {{item.job.houseWife}}</p>
                  <p>회사원 : {{item.job.company}}</p>
                  <p>자영업자 : {{item.job.self}}</p>
                  <p>예체능계열 : {{item.job.art}}</p>
                  <p>기타 : {{item.job.etc}}</p>
                  <p>-------사는곳-------</p>
                  <p>서울특별시 : {{item.live.ss}}</p>
                  <p>경기도 : {{item.live.gg}}</p>
                  <p>강원도 : {{item.live.gw}}</p>
                  <p>충청남도 : {{item.live.cn}}</p>
                  <p>충청북도 : {{item.live.cb}}</p>
                  <p>전라북도 : {{item.live.jb}}</p>
                  <p>전라남도 : {{item.live.jn}}</p>
                  <p>경상북도 : {{item.live.gb}}</p>
                  <p>경상남도 : {{item.live.gn}}</p>
                  <p>제주도 : {{item.live.jj}}</p>
                  <p>-------결혼-------</p>
                  <p>미혼 : {{item.marry.no}}</p>
                  <p>기혼 : {{item.marry.yes}}</p>
                  <p>-------나이대-------</p>
                  <p>10대 : {{item.age.one}}</p>
                  <p>20대 : {{item.age.two}}</p>
                  <p>30대 : {{item.age.three}}</p>
                  <p>40대 : {{item.age.four}}</p>
                  <p>50대 : {{item.age.five}}</p>
                  <p>60대이상 : {{item.age.upSix}}</p>



                  <p></p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>


      </v-layout>
    </v-container>
    <v-btn @click="getSimpleList"></v-btn>
    {{simpleList}}
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'

export default {
  name :'Simple',
  components:{
    Toolbar,
    SearchBar
  },
  data:function(){
    return{
      simpleList : null,
      text: 'textmessage'
    }
  },
  methods:{
    getSimpleList:function(){
      this.$http.post('/read/simple').then((response)=>{
        console.log(response)
        console.log(response.data)
        this.simpleList = response.data
      })
    },
    simpleVoteO:function(simpleContentId){
      this.$http.post(`/read/simple/vote-o/${simpleContentId}`).then((response)=>{
        console.log(response)
        console.log(response.data)
        this.getSimpleList()
      })
    },
    simpleVoteX:function(simpleContentId){
      this.$http.post(`/read/simple/vote-x/${simpleContentId}`).then((response)=>{
        console.log(response)
        console.log(response.data)
        this.getSimpleList()
      })
    },
    genderAvg:function(){
      var genderSum 

    }
  },
  mounted:function(){
    this.$http.post('/read/simple').then((response)=>{
        console.log(response)
        console.log(response.data)
        this.simpleList = response.data
    })
  },
  computed:{

  }
}
</script>
<style>

</style>
