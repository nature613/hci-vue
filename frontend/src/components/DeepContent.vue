<template>
  <div>
    <v-layout column>
      <v-card>
        <v-card-text>

          <v-layout column>
            <v-flex>
              <h3><b>{{deepContent.title}}</b></h3>
            </v-flex>
            <v-flex>
              <p>{{deepContent.content}}</p>
            </v-flex>
            <v-flex>
              <p><b>O</b> : {{deepContent.O}}</p>
              <p><b>X</b> : {{deepContent.X}}</p>
            </v-flex>
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
            <v-textarea
                id="comment"
                solo
                label="댓글"
                v-model="deepWriteComment"
              ></v-textarea>
              <v-btn block @click="deepAddComment">댓글 작성</v-btn>
              <v-btn block @click="goDeepList">글 목록 보기</v-btn>
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
      userId : '',
      userLive : '',
      userBirth : '',
      userJob : '',
      userGender : '',
      deepWriteComment : ''
    }
  },
  methods:{
    //찬성표 투표
    deepVoteO:function(deepContentId){
      alert("test")
      var userData = this.$session.get('userData')    
      this.$http.post(`/deep/vote-o/${deepContentId}`,this.parseUserData(userData))
      .then((response)=>{
        console.log(response)
        console.log(response.data)
        this.updateContent()
        this.$router.go()
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
        this.$router.go()
      })
    },
    //추가정보 O 투표
    setPlusO:function(deepContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/deep/set-plus-o/${deepContentId}`,this.parseUserData(userData))
      .then((response)=>{
        this.updateContent()
        this.$router.go()
      })
    },
    //추가정보 X 투표
    setPlusX:function(deepContentId){
      var userData = this.$session.get('userData')    
      this.$http.post(`/deep/set-plus-x/${deepContentId}`,this.parseUserData(userData))
      .then((response)=>{
        this.updateContent()
        this.$router.go()
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
    //태어난 해를 입력하면 나이대를 알려줌
    parseBirthData:function(birth){
      if(birth > 2009){
        return "10세 미만"
      }else if(birth > 1999){
        return "10대"
      }else if(birth > 1989){
        return "20대"
      }else if(birth > 1979){
        return "30대"
      }else if(birth > 1969){
        return "40대"
      }else{
        return "50대 이상"
      }
    },
    //댓글 추가
    deepAddComment:function(){
      this.$http.post(`/deep/comment/${this.$route.params.id}`,
      {
        comment : this.deepWriteComment,
        author : this.userId,
        live : this.userLive,
        birth : this.parseBirthData(this.userBirth),
        job : this.userJob,
        gender : this.userGender,
        contentId : this.$route.params.id
      }).then((response)=>{
        alert("댓글이 작성되었습니다")
        this.$router.go()
        this.$router.push(`/deep-main/${this.$route.params.id}/1`)
      })
    },
    //deep 글 목록 보기로 이동
    goDeepList : function(){
      this.$router.push('/deep')
    }
  },
  mounted:function(){
    var userData = this.$session.get('userData')    
    this.userId = userData.userId
    this.userLive = userData.userLive,
    this.userBirth = userData.userBirth,
    this.userJob = userData.userJob,
    this.userGender = userData.userGender,
    this.updateContent()
  }
}
</script>
<style scoped>
  #comment{
    font-size : 10px
  }
</style>
 