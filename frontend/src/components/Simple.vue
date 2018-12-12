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
            v-for="(item, i) in simpleList.slice().reverse()"
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
                        <!-- <p>-------O/X-------</p>
                        <p>O : {{item.oVote}} {{item.oVote/(item.oVote+item.xVote)*100}}%</p>
                        <p>X : {{item.xVote}} {{item.xVote/(item.oVote+item.xVote)*100}}%</p> -->
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
                        <!-- <p>-------성별-------</p>
                        <p>남자 O: {{item.genderMaleO}}</p>
                        <p>남자 X: {{item.genderMaleX}}</p>
                        <p>여자 O: {{item.genderFemaleO}}</p>
                        <p>여자 X: {{item.genderFemaleX}}</p> -->
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
                        <!-- <p>-------나이대-------</p>
                        <p>10세 미만 O: {{item.ageZeroO}}</p>
                        <p>10세 미만 X: {{item.ageZeroX}}</p>
                        <p>10대 O: {{item.ageOneO}}</p>
                        <p>10대 X: {{item.ageOneX}}</p>
                        <p>20대 O: {{item.ageTwoO}}</p>
                        <p>20대 X: {{item.ageTwoX}}</p>
                        <p>30대 O: {{item.ageThreeO}}</p>
                        <p>30대 X: {{item.ageThreeX}}</p>
                        <p>40대 O: {{item.ageFourO}}</p>
                        <p>40대 X: {{item.ageFourX}}</p>
                        <p>50대이상 O: {{item.ageUpFiveO}}</p>
                        <p>50대이상 X: {{item.ageUpFiveX}}</p> -->
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
                        <!-- <p>-------직업-------</p>
                        <p>무직 O: {{item.jobNoneO}}</p>
                        <p>무직 X: {{item.jobNoneX}}</p>
                        <p>중학생 O: {{item.jobMiddleO}}</p>
                        <p>중학생 X: {{item.jobMiddleX}}</p>
                        <p>고등학생 O: {{item.jobHighO}}</p>
                        <p>고등학생 X: {{item.jobHighX}}</p>
                        <p>대학생 O: {{item.jobUnivO}}</p>
                        <p>대학생 X: {{item.jobUnivX}}</p>
                        <p>주부 O: {{item.jobHouseWifeO}}</p>
                        <p>주부 X: {{item.jobHouseWifeX}}</p>
                        <p>회사원 O: {{item.jobCompanyO}}</p>
                        <p>회사원 X: {{item.jobCompanyX}}</p>
                        <p>자영업자 O: {{item.jobSelfO}}</p>
                        <p>자영업자 X: {{item.jobSelfX}}</p>
                        <p>예체능계열 O: {{item.jobArtO}}</p>
                        <p>예체능계열 X: {{item.jobArtX}}</p>
                        <p>기타 O: {{item.jobEtcO}}</p>
                        <p>기타 X: {{item.jobEtcX}}</p> -->
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
                        <!-- <p>-------사는곳-------</p>
                        <p>서울특별시 O: {{item.liveSsO}}</p>
                        <p>서울특별시 X: {{item.liveSsX}}</p>
                        <p>경기도 O: {{item.liveGgO}}</p>
                        <p>경기도 X: {{item.liveGgX}}</p>
                        <p>강원도 O: {{item.liveGwO}}</p>
                        <p>강원도 X: {{item.liveGwX}}</p>
                        <p>충청도 O: {{item.liveCcO}}</p>
                        <p>충청도 X: {{item.liveCcX}}</p>
                        <p>전라도 O: {{item.liveJlO}}</p>
                        <p>전라도 X: {{item.liveJlX}}</p>
                        <p>경상도 O: {{item.liveGsO}}</p>
                        <p>경상도 X: {{item.liveGsX}}</p>
                        <p>제주도 O: {{item.liveJjO}}</p>
                        <p>제주도 X: {{item.liveJjX}}</p> -->
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
                        <!-- <p>-------투표자가 원하는 추가 정보-------</p>
                        <p>{{item.plusContent}}</p>
                        <p>{{item.plusO}}를 선택한 사람 중 O : {{item.plusOvoteO}}</p>
                        <p>{{item.plusO}}를 선택한 사람 중 X  : {{item.plusOvoteX}}</p>
                        <p>{{item.plusX}}를 선택한 사람 중 O  : {{item.plusXvoteO}}</p>
                        <p>{{item.plusX}}를 선택한 사람 중 X  : {{item.plusXvoteX}}</p> -->
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
                  
                  <p></p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-layout>
    </v-container>
    <!-- {{simpleList}} -->
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
  name :'Simple',
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
      simpleList : null,
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
      dataAllO : [],
      dataAllX : []
    }
  },
  methods:{
    //simpleList 불러옴  
    getSimpleList:function(){
      this.$http.post('/simple/read').then((response)=>{
        console.log(response)
        console.log(response.data)
        this.simpleList = response.data
        this.loaded = true
      })
    },
    //찬성표 투표
    simpleVoteO:function(simpleContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/simple/vote-o/${simpleContentId}`,this.parseUserData(userData))
      .then((response)=>{
        console.log(response)
        console.log(response.data)
        this.getSimpleList()
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
      })
    },
    genderAvg:function(){
      var genderSum 

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
      })
    },

    //추가정보 X
    setPlusX:function(simpleContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/simple/set-plus-x/${simpleContentId}`,this.parseUserData(userData))
      .then((response)=>{
        this.getSimpleList()
      })
    }
  },
  mounted:function(){
    var userData = this.$session.get('userData')  
    this.userId = userData.userId
    this.getSimpleList()
  },
  // computed:{
  //   returnSimpleList : function(){
  //     return this.simpleList.slice().reverse()
  //   }
  // }
}
</script>
<style scoped>
  #test{
    font-size : 12px;
  }

</style>
