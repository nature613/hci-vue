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
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>-------O/X-------</p>
                        <p>O : {{item.oVote}} {{item.oVote/(item.oVote+item.xVote)*100}}%</p>
                        <p>X : {{item.xVote}} {{item.xVote/(item.oVote+item.xVote)*100}}%</p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>-------성별-------</p>
                        <p>남자 O: {{item.genderMaleO}}</p>
                        <p>남자 X: {{item.genderMaleX}}</p>
                        <p>여자 O: {{item.genderFemaleO}}</p>
                        <p>여자 X: {{item.genderFemaleX}}</p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>-------나이대-------</p>
                        <p>10대 O: {{item.ageOneO}}</p>
                        <p>10대 X: {{item.ageOneX}}</p>
                        <p>20대 O: {{item.ageTwoO}}</p>
                        <p>20대 X: {{item.ageTwoX}}</p>
                        <p>30대 O: {{item.ageThreeO}}</p>
                        <p>30대 X: {{item.ageThreeX}}</p>
                        <p>40대 O: {{item.ageFourO}}</p>
                        <p>40대 X: {{item.ageFourX}}</p>
                        <p>50대 O: {{item.ageFiveO}}</p>
                        <p>50대 X: {{item.ageFiveX}}</p>
                        <p>60대이상 O: {{item.ageUpSixO}}</p>
                        <p>60대이상 X: {{item.ageUpSixX}}</p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>-------직업-------</p>
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
                        <p>기타 X: {{item.jobEtcX}}</p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>-------사는곳-------</p>
                        <p>서울특별시 O: {{item.liveSsO}}</p>
                        <p>서울특별시 X: {{item.liveSsX}}</p>
                        <p>경기도 O: {{item.liveGgO}}</p>
                        <p>경기도 X: {{item.liveGgX}}</p>
                        <p>강원도 O: {{item.liveGwO}}</p>
                        <p>강원도 X: {{item.liveGwX}}</p>
                        <p>충청남도 O: {{item.liveCnO}}</p>
                        <p>충청남도 X: {{item.liveCnX}}</p>
                        <p>충청북도 O: {{item.liveCbO}}</p>
                        <p>충청북도 X: {{item.liveCbX}}</p>
                        <p>전라북도 O: {{item.liveJbO}}</p>
                        <p>전라북도 X: {{item.liveJbX}}</p>
                        <p>전라남도 O: {{item.liveJnO}}</p>
                        <p>전라남도 X: {{item.liveJnX}}</p>
                        <p>경상북도 O: {{item.liveGbO}}</p>
                        <p>경상북도 X: {{item.liveGbX}}</p>
                        <p>경상남도 O: {{item.liveGnO}}</p>
                        <p>경상남도 X: {{item.liveGnX}}</p>
                        <p>제주도 O: {{item.liveJjO}}</p>
                        <p>제주도 X: {{item.liveJjX}}</p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <!-- <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>-------결혼-------</p>
                        <p>미혼 O: {{item.marryNoO}}</p>
                        <p>미혼 X: {{item.marryNoX}}</p>
                        <p>기혼 O: {{item.marryYesO}}</p>
                        <p>기혼 X: {{item.marryYesX}}</p>                        
                      </v-card-text>
                    </v-card>
                  </v-tab-item> -->

                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>-------투표자가 원하는 추가 정보-------</p>
                        <p>{{item.plusContent}}</p>
                        <p>{{item.plusO}}를 선택한 사람 중 O : {{item.plusOvoteO}}</p>
                        <p>{{item.plusO}}를 선택한 사람 중 X  : {{item.plusOvoteX}}</p>
                        <p>{{item.plusX}}를 선택한 사람 중 O  : {{item.plusXvoteO}}</p>
                        <p>{{item.plusX}}를 선택한 사람 중 X  : {{item.plusXvoteX}}</p>
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
    <v-btn @click="getSimpleList">test button</v-btn>
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
      text: 'textmessage',
      tabList : [
        {name : "전체"},
        {name : "성별"},
        {name : "나이대"},
        {name : "직업"},
        {name : "사는 곳"},
        {name : "추가정보"}
      ],
      userId : ''
    }
  },
  methods:{
    //simpleList 불러옴  
    getSimpleList:function(){
      this.$http.post('/simple/read').then((response)=>{
        console.log(response)
        console.log(response.data)
        this.simpleList = response.data
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
      }
      switch(userData.userLive){
        case '서울특별시':
        var voterLive = "liveSs"
        break;
        case '경기도':
        var voterLive = "liveGg"
        break;
        case '강원도':
        var voterLive = "liveGw"
        break;
        case '충청남도':
        var voterLive = "liveCn"
        break;
        case '충청북도':
        var voterLive = "liveCb"
        break;
        case '전라북도':
        var voterLive = "liveJb"
        break;
        case '전라남도':
        var voterLive = "liveJn"
        break;
        case '경상북도':
        var voterLive = "liveGb"
        break;
        case '경상남도':
        var voterLive = "liveGn"
        break;
        case '제주도':
        var voterLive = "liveJj"
        break;
        default:
        alert("Live pares error")
        break;

      }
      switch(userData.userMarry){
        case '미혼':
        var voterMarry = "marryNo"
        break;
        case '기혼':
        var voterMarry = "marryYes"
        break;
        default:
        alert("marry parse error")
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
        voterMarry : voterMarry,
        voterJob : voterJob,
        // voterBirth : voterBirth,
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
  computed:{

  }
}
</script>
<style scoped>
  #test{
    font-size : 12px;
  }

</style>
