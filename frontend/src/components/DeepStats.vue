<template>
  <div>
    <v-layout column>
        <v-card>
          <v-card-text>
            <v-layout column>
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
                      <AllPieChart :allO="deepContent.oVote" :allX="deepContent.xVote" :width="279" :height="230"></AllPieChart>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item lazy="true">
                  <v-card flat>
                    <v-card-text>
                      <v-layout row>
                        <v-flex>
                          <GenderMalePieChart :maleO="deepContent.genderMaleO" :maleX="deepContent.genderMaleX"  :width="134" :height="230"></GenderMalePieChart>
                        </v-flex>
                        <v-flex>
                          <GenderFemalePieChart :femaleO="deepContent.genderFemaleO" :femaleX="deepContent.genderFemaleX" :width="134" :height="230"></GenderFemalePieChart>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item lazy="true">
                  <v-card flat>
                    <v-card-text>
                      <AgeRadarChart :ageZeroO="deepContent.ageZeroO" :ageZeroX="deepContent.ageZeroX" 
                      :ageOneO="deepContent.ageOneO" :ageOneX="deepContent.ageOneX" :ageTwoO="deepContent.ageTwoO" :ageTwoX="deepContent.ageTwoX" 
                      :ageThreeO="deepContent.ageThreeO" :ageThreeX="deepContent.ageThreeX" :ageFourO="deepContent.ageFourO" :ageFourX="deepContent.ageFourX" 
                      :ageUpFiveO="deepContent.ageUpFiveO" :ageUpFiveX="deepContent.ageUpFiveX"></AgeRadarChart>
                      
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item lazy="true">
                  <v-card flat>
                    <v-card-text>
                      <JobRadarChart :jobNoneO="deepContent.jobNoneO" :jobNoneX="deepContent.jobNoneX" :jobMiddleO="deepContent.jobMiddleO" :jobMiddleX="deepContent.jobMiddleX"
                      :jobHighO="deepContent.jobHighO" :jobHighX="deepContent.jobHighX" :jobUnivO="deepContent.jobUnivO" :jobUnivX="deepContent.jobUnivX" 
                      :jobHouseWifeO="deepContent.jobHouseWifeO" :jobHouseWifeX="deepContent.jobHouseWifeX" :jobCompanyO="deepContent.jobCompanyO" :jobCompanyX="deepContent.jobCompanyX"
                      :jobSelfO="deepContent.jobSelfO" :jobSelfX="deepContent.jobSelfX" :jobArtO="deepContent.jobArtO" :jobArtX="deepContent.jobArtX"
                      :jobEtcO="deepContent.jobEtcO" :jobEtcX="deepContent.jobEtcX"></JobRadarChart>
                      
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item lazy="true">
                  <v-card flat>
                    <v-card-text>
                      <LiveRadarChart :liveSsO="deepContent.liveSsO" :liveSsX="deepContent.liveSsX" :liveGgO="deepContent.liveGgO" :liveGgX="deepContent.liveGgX"
                      :liveGwO="deepContent.liveGwO" :liveGwX="deepContent.liveGwX" :liveCcO="deepContent.liveCcO" :liveCcX="deepContent.liveCcX"
                      :liveJlO="deepContent.liveJlO" :liveJlX="deepContent.liveJlX" :liveGsO="deepContent.liveGsO" :liveGsX="deepContent.liveGsX"
                      :liveJjO="deepContent.liveJjO" :liveJjX="deepContent.liveJjX"></LiveRadarChart>
                      
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item lazy="true">
                  <v-card flat>
                    <v-card-text>
                      <v-layout row v-if="(deepContent.plusContent !== '')">
                        <v-flex>
                          <PlusOPieChart :plusOvoteO="deepContent.plusOvoteO" :plusOvoteX="deepContent.plusOvoteX" :plusOContent="deepContent.plusContent+deepContent.plusO" :width="134" :height="230"></PlusOPieChart>
                        </v-flex>
                        <v-flex>
                          <PlusXPieChart :plusXvoteO="deepContent.plusXvoteO" :plusXvoteX="deepContent.plusXvoteX" :plusXContent="deepContent.plusContent+deepContent.plusX" :width="134" :height="230"></PlusXPieChart>
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
            </v-layout>
          </v-card-text>
        </v-card>
    </v-layout>
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
  name: 'MyPage',
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
      deepContent :null,
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
  },
  mounted:function(){
      this.$http.post(`/deep/content/${this.$route.params.id}`).then((response)=>{
      console.log(response.data)
      this.deepContent = response.data
    })
  }
}
</script>
<style scoped>
  #test{
    font-size : 12px;
  }

</style>