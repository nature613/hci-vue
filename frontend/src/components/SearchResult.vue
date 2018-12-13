<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>          
          <SearchBar></SearchBar>
          <v-tabs fixed-tabs>
            <v-tab>
              simple
            </v-tab>
            <v-tab>
              deep
            </v-tab>
            <v-tab-item lazy="true">
              <v-expansion-panel
                v-model="panel"
                expand
              >
                <v-expansion-panel-content
                  v-for="(item, i) in searchSimpleList.slice().reverse()"
                  :key="i"
                  expand-icon=""
                >
                  <div slot="header">
                    <v-layout column>
                      <v-layout justify-space-between row>
                        <h2 class="text-xs-center">{{item.content}}</h2>
                        <v-spacer></v-spacer>
                        <v-btn>통계보기</v-btn>
                      </v-layout>
                      <v-layout v-if="item.voter.includes(userId) === false" row>
                        <v-flex>
                          <v-btn @click="simpleVoteO(item._id)" block>{{item.O}}(O)</v-btn>
                        </v-flex>
                        <v-flex>
                          <v-btn @click="simpleVoteX(item._id)" block>{{item.X}}(X)</v-btn>
                        </v-flex>
                      </v-layout>
                      <v-layout v-if="item.voter.includes(userId) === true" row>
                        <v-flex>
                          <v-btn disabled v-if="(item.ovoter.includes(userId) === true)" @click="simpleVoteO(item._id)" block>{{item.O}}(O) 선택함</v-btn>
                          <v-btn disabled v-if="(item.ovoter.includes(userId) === false)" @click="simpleVoteO(item._id)" block>{{item.O}}(O)</v-btn>
                        </v-flex>
                        <v-flex>
                          <v-btn disabled v-if="(item.xvoter.includes(userId) === true)" @click="simpleVoteX(item._id)" color="primary" block>{{item.X}}(X) 선택함</v-btn>
                          <v-btn disabled v-if="(item.xvoter.includes(userId) === false)" @click="simpleVoteX(item._id)" block>{{item.X}}(X)</v-btn>
                        </v-flex>
                      </v-layout>
                    </v-layout>  
                  </div>
                  <v-card>
                    <v-card-text class="grey lighten-3">
                      <p v-if="item.plusContent">
                        <v-layout column>
                          <v-flex text-md-center>
                            <p><b>-투표자 추가 정보-</b></p>
                            {{item.plusContent}}
                          </v-flex>
                          <v-layout v-if="(item.plusOSetter.includes(userId) === false) && (item.plusXSetter.includes(userId) === false)" row>
                            <v-flex>
                              <v-btn block @click="setPlusO(item._id)">{{item.plusO}}</v-btn>
                            </v-flex>
                            <v-flex>
                              <v-btn block @click="setPlusX(item._id)">{{item.plusX}}</v-btn>
                            </v-flex>
                          </v-layout>
                          <v-layout v-if="(item.plusOSetter.includes(userId) === true) || (item.plusXSetter.includes(userId) === true)" row>
                            <v-flex>
                              <v-btn disabled block v-if="(item.plusOSetter.includes(userId) === true)" @click="setPlusO(item._id)">{{item.plusO}} 선택함</v-btn>
                              <v-btn disabled block v-if="(item.plusOSetter.includes(userId) === false)" @click="setPlusO(item._id)">{{item.plusO}}</v-btn>
                            </v-flex>
                            <v-flex>
                              <v-btn disabled block v-if="(item.plusXSetter.includes(userId) === true)" @click="setPlusX(item._id)">{{item.plusX}} 선택함</v-btn>
                              <v-btn disabled block v-if="(item.plusXSetter.includes(userId) === false)" @click="setPlusX(item._id)">{{item.plusX}}</v-btn>
                            </v-flex>
                          </v-layout>
        
                        </v-layout>
                      </p>
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
                              <AllPieChart :allO="item.oVote" :allX="item.xVote" :width="279" :height="230"></AllPieChart>
                            </v-card-text>
                          </v-card>
                        </v-tab-item>
                        <v-tab-item lazy="true">
                          <v-card flat>
                            <v-card-text>
                              <v-layout row>
                                <v-flex>
                                  <GenderMalePieChart :maleO="item.genderMaleO" :maleX="item.genderMaleX"  :width="134" :height="230"></GenderMalePieChart>
                                </v-flex>
                                <v-flex>
                                  <GenderFemalePieChart :femaleO="item.genderFemaleO" :femaleX="item.genderFemaleX" :width="134" :height="230"></GenderFemalePieChart>
                                </v-flex>
                              </v-layout>
                              </v-card-text>
                          </v-card>
                        </v-tab-item>
                        <v-tab-item lazy="true">
                          <v-card flat>
                            <v-card-text>
                              <AgeRadarChart :ageZeroO="item.ageZeroO" :ageZeroX="item.ageZeroX" 
                              :ageOneO="item.ageOneO" :ageOneX="item.ageOneX" :ageTwoO="item.ageTwoO" :ageTwoX="item.ageTwoX" 
                              :ageThreeO="item.ageThreeO" :ageThreeX="item.ageThreeX" :ageFourO="item.ageFourO" :ageFourX="item.ageFourX" 
                              :ageUpFiveO="item.ageUpFiveO" :ageUpFiveX="item.ageUpFiveX"></AgeRadarChart>
                              </v-card-text>
                          </v-card>
                        </v-tab-item>
                        <v-tab-item lazy="true">
                          <v-card flat>
                            <v-card-text>
                              <JobRadarChart :jobNoneO="item.jobNoneO" :jobNoneX="item.jobNoneX" :jobMiddleO="item.jobMiddleO" :jobMiddleX="item.jobMiddleX"
                              :jobHighO="item.jobHighO" :jobHighX="item.jobHighX" :jobUnivO="item.jobUnivO" :jobUnivX="item.jobUnivX" 
                              :jobHouseWifeO="item.jobHouseWifeO" :jobHouseWifeX="item.jobHouseWifeX" :jobCompanyO="item.jobCompanyO" :jobCompanyX="item.jobCompanyX"
                              :jobSelfO="item.jobSelfO" :jobSelfX="item.jobSelfX" :jobArtO="item.jobArtO" :jobArtX="item.jobArtX"
                              :jobEtcO="item.jobEtcO" :jobEtcX="item.jobEtcX"></JobRadarChart>
                              </v-card-text>
                          </v-card>
                        </v-tab-item>
                        <v-tab-item lazy="true">
                          <v-card flat>
                            <v-card-text>
                              <LiveRadarChart :liveSsO="item.liveSsO" :liveSsX="item.liveSsX" :liveGgO="item.liveGgO" :liveGgX="item.liveGgX"
                              :liveGwO="item.liveGwO" :liveGwX="item.liveGwX" :liveCcO="item.liveCcO" :liveCcX="item.liveCcX"
                              :liveJlO="item.liveJlO" :liveJlX="item.liveJlX" :liveGsO="item.liveGsO" :liveGsX="item.liveGsX"
                              :liveJjO="item.liveJjO" :liveJjX="item.liveJjX"></LiveRadarChart>
                            </v-card-text>
                          </v-card>
                        </v-tab-item>
                        <v-tab-item lazy="true">
                          <v-card flat>
                            <v-card-text>
                              <v-layout row v-if="(item.plusContent !== '')"> 
                                <v-flex>
                                  <PlusOPieChart :plusOvoteO="item.plusOvoteO" :plusOvoteX="item.plusOvoteX" :plusOContent="item.plusContent+item.plusO" :width="134" :height="230"></PlusOPieChart>
                                </v-flex>
                                <v-flex>
                                  <PlusXPieChart :plusXvoteO="item.plusXvoteO" :plusXvoteX="item.plusXvoteX" :plusXContent="item.plusContent+item.plusX" :width="134" :height="230"></PlusXPieChart>
                                </v-flex>
                              </v-layout>
                              <v-layout v-else>
                                <v-flex>
                                  <p>글쓴이가 등록한 추가 정보가 없습니다.</p>
                                </v-flex>
                              </v-layout>
                            </v-card-text>
                          </v-card>
                        </v-tab-item>
                      </v-tabs>
                        
                        <p></p>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-tab-item>
            <v-tab-item lazy="true">
               <v-card>
                <v-data-table :items="searchDeepList" class="elevation-1" hide-actions :headers="headers">
                  <template slot="items" slot-scope="props">
                    <tr :active="props.selected" class="text-xs-center">
                    
                      <td @click="deepContentView(props.item)">{{props.item.title}}</td>
                      <td @click="deepCommentView(props.item)"><v-icon>comment</v-icon></td>
                      <td @click="deepStatsView(props.item)"><v-icon>equalizer</v-icon></td>
                      
                    </tr>
                  </template>
                </v-data-table>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
    
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import SearchBar from './SearchBar.vue'
import AllPieChart from './chart/AllPieChart.vue'
import GenderMalePieChart from './chart/GenderMalePieChart.vue'
import GenderFemalePieChart from './chart/GenderFemalePieChart.vue'
import AgeRadarChart from './chart/AgeRadarChart.vue'
import JobRadarChart from './chart/JobRadarChart.vue'
import LiveRadarChart from  './chart/LiveRadarChart.vue'
import PlusOPieChart from './chart/PlusOPieChart.vue'
import PlusXPieChart from './chart/PlusXPieChart.vue'
export default {
  name: 'SearchResult',
  components:{
    Toolbar,
    SearchBar,
    AllPieChart,
    GenderMalePieChart,
    GenderFemalePieChart,
    AgeRadarChart,
    JobRadarChart,
    LiveRadarChart,
    PlusOPieChart,
    PlusXPieChart,
  },
  data:function(){
    return{
      searchSimpleList  : '',
      tabList : [
        {name : "전체"},
        {name : "성별"},
        {name : "나이대"},
        {name : "직업"},
        {name : "사는 곳"},
        {name : "추가정보"}
      ],
      userId : '',
      loaded : false,

      searchDeepList : '',
      headers:[
        {
          text : "제목",
          sortable: false,
          align: 'center'
        },
        {
          text : '댓글',
          sortable: false,
          align: 'center'
        },
        {
          text : '통계',
          sortable: false,
          align: 'center'
        }
      ],
      items : '',
    }
  },
  methods:{
    //찬성표 투표
    simpleVoteO:function(simpleContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/simple/vote-o/${simpleContentId}`,this.parseUserData(userData))
      .then((response)=>{
        console.log(response)
        console.log(response.data)
        this.getSimpleList()
        this.$router.go()
      })
    },
    //반대표 투표
    simpleVoteX:function(simpleContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/simple/vote-x/${simpleContentId}`,this.parseUserData(userData))
      .then((response)=>{
        console.log(response)
        console.log(response.data)
        this.getSimpleList()
        this.$router.go()
      })
    },
    //user 정보 분석
    parseUserData:function(userData){
      switch(userData.userGender){
        case '남자':
        var voterGender = "genderMale"
        break;
        case '여자':
        var voterGender = "genderFemale"
        break;
        default:
        alert("Gender parse error")
        break;
      }
      //나이 분석
      if(userData.userBirth > 2009){
        var voterBirth = "ageZero"
      }else if(userData.userBirth > 1999){
        var voterBirth = "ageOne"
      }else if(userData.userBirth > 1989){
        var voterBirth = "ageTwo"
      }else if(userData.userBirth > 1979){
        var voterBirth = "ageThree"
      }else if(userData.userBirth > 1969){
        var voterBirth = "ageFour"
      }else{
        var voterBirth = "ageUpFive"
      }
      //사는 곳 분석
      switch(userData.userLive){
        case '서울특별시':
        var voterLive = "liveSs"
        break;
        case '경기도(인천 포함)':
        var voterLive = "liveGg"
        break;
        case '강원도':
        var voterLive = "liveGw"
        break;
        case '충청도(대전,세종 포함)':
        var voterLive = "liveCc"
        break;
        case '경상도(대구,울산,부산 포함)':
        var voterLive = "liveGs"
        break;
        case '전라도(광주 포함)':
        var voterLive = "liveJl"
        break;
        case '제주도':
        var voterLive = "liveJj"
        break;
        default:
        alert("Live parse error")
        break;

      }
      switch(userData.userJob){
        case '무직':
        var voterJob = "jobNone"
        break;
        case '중학생':
        var voterJob = "jobMiddle"
        break;
        case '고등학생':
        var voterJob = "jobHigh"
        break;
        case '대학생':
        var voterJob = "jobUniv"
        break;
        case '주부':
        var voterJob = "jobHouseWife"
        break;
        case '회사원':
        var voterJob = "jobCompany"
        break;
        case '자영업자':
        var voterJob = "jobSelf"
        break;
        case '예체능계열':
        var voterJob = "jobArt"
        break;
        case '기타':
        var voterJob = "jobEtc"
        break;
        default:
        alert("job parse error")
      }
      return{
        voter : userData.userId,
        voterGender : voterGender,
        voterLive :voterLive,
        voterJob : voterJob,
        voterBirth : voterBirth,
      }
    },
     //추가정보 O
    setPlusO:function(simpleContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/simple/set-plus-o/${simpleContentId}`,this.parseUserData(userData))
      .then((response)=>{
        this.getSimpleList()
        this.$router.go()
      })
    },
    //추가정보 X
    setPlusX:function(simpleContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/simple/set-plus-x/${simpleContentId}`,this.parseUserData(userData))
      .then((response)=>{
        this.getSimpleList()
        this.$router.go()
      })
    },
    deepContentView:function(item){
      console.log("item")
      console.log(item._id)
      this.$router.push(`/deep-main/${item._id}/0`)
    },
    deepCommentView:function(item){
      console.log("item")
      console.log(item)
      this.$router.push(`/deep-main/${item._id}/1`)
    },
    deepStatsView:function(item){
      console.log("item")
      console.log(item)
      this.$router.push(`/deep-main/${item._id}/2`)
    },
  
  },
  mounted:function(){
    var userData = this.$session.get('userData')  
    this.userId = userData.userId
    this.$http.post(`/search/simple/${this.$route.params.search}`).then((response)=>{
      console.log(response.data)
      this.searchSimpleList = response.data
      this.$http.post(`/search/deep/${this.$route.params.search}`).then((response)=>{
        console.log(response.data)
        this.searchDeepList = response.data
      })
    })
  }
}
</script>
<style>

</style>
 