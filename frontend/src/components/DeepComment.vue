<template>
  <div>
      <v-layout column>
   
          <v-card>
            <v-card-text>
              <v-radio-group v-model="radioGroup" row>
                <v-radio label="모든 댓글" value="all"></v-radio>
                <v-radio label="조건에 맞는 댓글" value="notAll"></v-radio>
              </v-radio-group>
              <v-tabs v-show="radioGroup === 'notAll'" fixed-tabs>
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
                      <v-layout row>
                        <v-checkbox v-model="selectedGender" label="남자" value="남자"></v-checkbox>
                        <v-checkbox v-model="selectedGender" label="여자" value="여자"></v-checkbox>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item lazy="true">
                  <v-card flat>
                    <v-card-text>
                      <v-layout row>
                        <v-checkbox v-model="selectedBirth" label="10세 미만" value="10세 미만"></v-checkbox>
                        <v-checkbox v-model="selectedBirth" label="10대" value="10대"></v-checkbox>
                        <v-checkbox v-model="selectedBirth" label="20대" value="20대"></v-checkbox>
                      </v-layout>
                      <v-layout row>
                        <v-checkbox v-model="selectedBirth" label="30대" value="30대"></v-checkbox>
                        <v-checkbox v-model="selectedBirth" label="40대" value="40대"></v-checkbox>
                        <v-checkbox v-model="selectedBirth" label="50대 이상" value="50대 이상"></v-checkbox>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item lazy="true">
                  <v-card flat>
                    <v-card-text>
                      <v-layout row>
                        <v-checkbox v-model="selectedJob" label="무직" value="무직"></v-checkbox>
                        <v-checkbox v-model="selectedJob" label="중학생" value="중학생"></v-checkbox>
                        <v-checkbox v-model="selectedJob" label="고등학생" value="고등학생"></v-checkbox>
                      </v-layout>
                      <v-layout row>
                        <v-checkbox v-model="selectedJob" label="대학생" value="대학생"></v-checkbox>
                        <v-checkbox v-model="selectedJob" label="주부" value="주부"></v-checkbox>
                        <v-checkbox v-model="selectedJob" label="회사원" value="회사원"></v-checkbox>
                      </v-layout>
                      <v-layout row>
                        <v-checkbox v-model="selectedJob" label="자영업자" value="자영업자"></v-checkbox>
                        <v-checkbox v-model="selectedJob" label="예체능계열" value="예체능계열"></v-checkbox>
                        <v-checkbox v-model="selectedJob" label="기타" value="기타"></v-checkbox>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item lazy="true">
                  <v-card flat>
                    <v-card-text>
                      <v-layout row>
                        <v-checkbox v-model="selectedLive" label="서울특별시" value="서울특별시"></v-checkbox>
                        <v-checkbox v-model="selectedLive" label="경기도(인천 포함)" value="경기도(인천 포함)"></v-checkbox>
                        <v-checkbox v-model="selectedLive" label="강원도" value="강원도"></v-checkbox>
                      </v-layout>
                      <v-layout row>
                        <v-checkbox v-model="selectedLive" label="충청도(대전,세종 포함)" value="충청도(대전,세종 포함)"></v-checkbox>
                        <v-checkbox v-model="selectedLive" label="경상도(대구,울산,부산 포함)" value="경상도(대구,울산,부산 포함)"></v-checkbox>
                      </v-layout>
                      <v-layout row>
                        <v-checkbox v-model="selectedLive" label="전라도(광주 포함)" value="전라도(광주 포함)"></v-checkbox>
                        <v-checkbox v-model="selectedLive" label="제주도" value="제주도"></v-checkbox>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>


              <v-card>

                <v-data-table 
                  :items="commentList" class="elevation-1" 
                  hide-actions 
                  :headers="headers" 
                  disable-initial-sort  
                  v-show="radioGroup === 'all'">
                  
                  <template slot="items" slot-scope="props">
                    <tr :active="props.selected" class="text-xs-center">
                      <td>{{props.item.comment}}</td>
                      <td id="testtest" @click="plusGood(props.item.comment)"><v-icon>thumb_up_alt</v-icon>{{props.item.good}}</td>
                      <td id="testtest" @click="plusBad(props.item.comment)"><v-icon>thumb_down_alt</v-icon>{{props.item.bad}}</td>
                    </tr>
                  </template>

                </v-data-table>


                <v-data-table 
                  :items="commentList" class="elevation-1" 
                  hide-actions 
                  :headers="headers" 
                  disable-initial-sort  
                  v-show="radioGroup === 'notAll'">
                  
                  <template slot="items" slot-scope="props">
                    <tr 
                      :active="props.selected" 
                      class="text-xs-center"
                      v-show="
                      (selectedGender.includes(props.item.gender)) ||
                      (selectedBirth.includes(props.item.birth)) ||
                      (selectedJob.includes(props.item.job)) ||
                      (selectedLive.includes(props.item.live))
                      ">
                      <td>{{props.item.comment}}</td>
                      <td id="testtest" @click="plusGood(props.item.comment)"><v-icon>thumb_up_alt</v-icon>{{props.item.good}}</td>
                      <td id="testtest" @click="plusBad(props.item.comment)"><v-icon>thumb_down_alt</v-icon>{{props.item.bad}}</td>
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
        {name : "성별"},
        {name : "나이대"},
        {name : "직업"},
        {name : "사는 곳"}
      ],
      headers:[
        {
          text : "내용",
          sortable: false,
          align: 'center',
          value : 'comment'
        },
        {
          text : '좋아요',
          sortable: true,
          value : 'good'
        },
        {
          text : '별로에요',
          sortable: true,
          value : 'bad'
        },
      ],
      pagination: {
        descending : true
      },
      allCheckbox : true,
      radioGroup : 'all',
      selectedGender : [],
      selectedLive : [],
      selectedBirth : [],
      selectedJob : []
    }
  },
  methods:{
    plusGood : function(content){
      this.$http.post(`/deep/comment/${this.$route.params.id}/good`,{content : content}).then((response)=>{
        this.commentList = response.data.commentList
        this.$router.go()
        this.$router.push(`/deep-main/${this.$route.params.id}/1`)
      })
    },
    plusBad : function(content){
      this.$http.post(`/deep/comment/${this.$route.params.id}/bad`,{content : content}).then((response)=>{
        this.commentList = response.data.commentList
        this.$router.go()
        this.$router.push(`/deep-main/${this.$route.params.id}/1`)
      })
    }
  },
  mounted:function(){
    this.$http.post(`/deep/content/${this.$route.params.id}`).then((response)=>{
      this.commentList = response.data.commentList
    })
  }
}
</script>
<style scoped>
  /* #testtest{
    padding-right : 0px;
    padding-left : 0px;
    display : inline-block;
  } */
</style>
 