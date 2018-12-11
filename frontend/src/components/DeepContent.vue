<template>
  <div>
      <v-layout column>
        
          <v-card>
            <v-card-text>

            
              <v-layout column>
                <v-flex>
                  <p>{{deepContent.title}}</p>
                </v-flex>
                <v-flex>
                  <p>{{deepContent.content}}</p>
                </v-flex>
                <v-flex>
                  <p>O : {{deepContent.O}}</p>
                  <p>X : {{deepContent.X}}</p>
                </v-flex>
                <p>투표하기</p>
                <v-layout v-if="deepContent.voter.includes(userId) === false" row>
                  <v-flex>
                    <v-btn @click="deepVoteO(deepContent._id)" block>{{deepContent.O}}(O)</v-btn>
                  </v-flex>
                  <v-flex>
                    <v-btn @click="deepVoteX(deepContent._id)" block>{{deepContent.X}}(X)</v-btn>
                  </v-flex>
                </v-layout>
                <v-layout v-if="deepContent.voter.includes(userId) === true" row>
                  <v-flex>
                    <v-btn disabled v-if="(deepContent.ovoter.includes(userId) === true)" @click="deepVoteO(deepContent._id)" block>{{deepContent.O}}(O) 선택함</v-btn>
                    <v-btn disabled v-if="(deepContent.ovoter.includes(userId) === false)" @click="deepVoteO(deepContent._id)" block>{{deepContent.O}}(O)</v-btn>
                  </v-flex>
                  <v-flex>
                    <v-btn disabled v-if="(deepContent.xvoter.includes(userId) === true)" @click="deepVoteX(deepContent._id)" color="primary" block>{{deepContent.X}}(X) 선택함</v-btn>
                    <v-btn disabled v-if="(deepContent.xvoter.includes(userId) === false)" @click="deepVoteX(deepContent._id)" block>{{deepContent.X}}(X)</v-btn>
                  </v-flex>
                </v-layout>


                <p v-if="deepContent.plusContent">
                  <v-layout column>
                    <v-flex text-md-center>
                      <p><b>-투표자 추가 정보-</b></p>
                      {{deepContent.plusContent}}
                    </v-flex>
                    <v-layout v-if="(deepContent.plusOSetter.includes(userId) === false) && (deepContent.plusXSetter.includes(userId) === false)" row>
                      <v-flex>
                        <v-btn block @click="setPlusO(deepContent._id)">{{deepContent.plusO}}</v-btn>
                      </v-flex>
                      <v-flex>
                        <v-btn block @click="setPlusX(deepContent._id)">{{deepContent.plusX}}</v-btn>
                      </v-flex>
                    </v-layout>
                    <v-layout v-if="(deepContent.plusOSetter.includes(userId) === true) || (deepContent.plusXSetter.includes(userId) === true)" row>
                      <v-flex>
                        <v-btn disabled block v-if="(deepContent.plusOSetter.includes(userId) === true)" @click="setPlusO(deepContent._id)">{{deepContent.plusO}} 선택함</v-btn>
                        <v-btn disabled block v-if="(deepContent.plusOSetter.includes(userId) === false)" @click="setPlusO(deepContent._id)">{{deepContent.plusO}}</v-btn>
                      </v-flex>
                      <v-flex>
                        <v-btn disabled block v-if="(deepContent.plusXSetter.includes(userId) === true)" @click="setPlusX(deepContent._id)">{{deepContent.plusX}} 선택함</v-btn>
                        <v-btn disabled block v-if="(deepContent.plusXSetter.includes(userId) === false)" @click="setPlusX(deepContent._id)">{{deepContent.plusX}}</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-layout>
                </p>




                <!-- <v-textarea
                    box
                    label="댓글"
                    v-model="writeComment"
                  ></v-textarea>
                  <v-btn block>댓글 작성</v-btn> -->
                  
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
      deepContent: '',
      userId : ''
    }
  },
  methods:{
    deepVoteO:function(deepContentId){
      alert("test")
      var userData = this.$session.get('userData')    
      this.$http.post(`/deep/vote-o/${deepContentId}`,this.parseUserData(userData))
      .then((response)=>{
        console.log(response)
        console.log(response.data)
        this.updateContent()
      })
    },
    //반대표 투표
    deepVoteX:function(deepContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/deep/vote-x/${deepContentId}`,this.parseUserData(userData))
      .then((response)=>{
        console.log(response)
        console.log(response.data)
        this.updateContent()
      })
    },
    //추가정보 O
    setPlusO:function(deepContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/deep/set-plus-o/${deepContentId}`,this.parseUserData(userData))
      .then((response)=>{
        this.updateContent()
      })
    },

    //추가정보 X
    setPlusX:function(deepContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/deep/set-plus-x/${deepContentId}`,this.parseUserData(userData))
      .then((response)=>{
        alert("good")
        this.updateContent()
      })
    },
    //지금 페이지의 글 업데이트
    updateContent:function(){
        this.$http.post(`/deep/content/${this.$route.params.id}`).then((response)=>{
        console.log(response.data)
        this.deepContent = response.data
      })
    },
    //userData 분석
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
  },
  mounted:function(){
    var userData = this.$session.get('userData')    
    this.userId = userData.userId
    this.updateContent()
  }
}
</script>
<style>

</style>
 