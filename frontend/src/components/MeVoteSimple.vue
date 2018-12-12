<template>
  <div>
    <v-expansion-panel
          v-model="panel"
          expand
        >
          <v-expansion-panel-content
            v-for="(item, i) in meVoteSimpleList.slice().reverse()"
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
                      <p>{{item.plusContent}}</p>
                    </v-flex>
                  </v-layout>
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
  </div>
</template>
<script>

import AllPieChart from './chart/AllPieChart.vue'
import GenderMalePieChart from './chart/GenderMalePieChart.vue'
import GenderFemalePieChart from './chart/GenderFemalePieChart.vue'
import AgeRadarChart from './chart/AgeRadarChart.vue'
import JobRadarChart from './chart/JobRadarChart.vue'
import LiveRadarChart from  './chart/LiveRadarChart.vue'
import PlusOPieChart from './chart/PlusOPieChart.vue'
import PlusXPieChart from './chart/PlusXPieChart.vue'


export default {
  name: 'MeVoteSimple',
  components:{
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
      meVoteSimpleList : '',
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
    getMeVoteSimpleList:function(){
      this.$http.post(`/simple/vote/${this.$session.get('userData').userId }`).then((response)=>{
        this.meVoteSimpleList = response.data
        this.loaded = true
      })
    },
  },
  mounted:function(){
    var userData = this.$session.get('userData')  
    this.userId = userData.userId
    this.getMeVoteSimpleList()
  }
}
</script>
<style>

</style>
 