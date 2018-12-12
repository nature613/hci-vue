<template>
  <div>
    <Toolbar></Toolbar>
    <v-container>
      <v-layout column>
        <v-flex xs12>          
          <SearchBar></SearchBar>
        </v-flex>
        <v-flex><h3>내 정보 관리</h3></v-flex>
        <v-flex>
          
          <v-card>
            <v-card-title primary-title>
              
              <!-- 수정을 진행하는 단계 -->
              <v-layout wrap v-if="modify">
                <v-flex xs12 sm4>
                <v-radio-group 
                  v-model="userGender" 
                  :mandatory="false" 
                  :rules="[() => !!userGender || 'This field is required']"
                  required
                  row>
                  <v-radio label="남자" value="남자"></v-radio>
                  <v-radio label="여자" value="여자"></v-radio>
                </v-radio-group>
                </v-flex>

                <v-flex xs12 sm4>
                  <v-text-field
                    label="태어난 해를 입력해주세요 ex) 1990"
                    type="number"
                    id="userBirth"
                    name="userBirth"
                    v-model="userBirth"
                    maxlength="4"
                    :rules="[rules.required, () => !!userBirth || 'This field is required']"
                    required
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                  <label for="userJob">직업은요?</label>
                    <v-select 
                      v-model="userJob"
                      :items="jobs"
                      :rules="[() => !!userJob || 'This field is required']"
                      required
                    ></v-select>
                </v-flex>

                <v-flex xs12>
                  <label for="userLive">사는 곳</label>
                    <v-select 
                      v-model="userLive"
                      :items="lives" 
                      :rules="[() => !!userLive || 'This field is required']"
                      required
                    ></v-select>
                </v-flex>

                <v-flex xs12>
                  <v-text-field
                    label="아이디"
                    id="userId"
                    name="userId"
                    v-model="userId"
                    :rules="[() => !!userId || 'This field is required']"
                    required
                  ></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-text-field
                    label="비밀번호는요?"
                    id="userPw"
                    name="userPw"
                    v-model="userPw"
                    type="password"
                    :rules="[() => !!userPw || 'This field is required']"
                    required
                  ></v-text-field>
                </v-flex>

                <!-- <v-flex xs12>
                  <v-text-field
                    label="비밀번호를 다시 입력해주세요"
                    id="userPwRe"
                    name="userPwRe"
                    v-model="userPwRe"
                    type="password"
                    :rules="[() => !!userPwRe || 'This field is required']"
                    required
                  ></v-text-field>
                </v-flex> -->

                <v-dialog v-model="dialogModify" persistent max-width="290">
                  <v-btn slot="activator" >수정 완료하기</v-btn>
                  <v-card>
                    <v-card-title class="headline">수정 완료</v-card-title>
                    <v-card-text>정보 수정을 완료하고 저장하시겠습니까?</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click="dialogModify = false">아니오</v-btn>
                      <v-btn color="green darken-1" flat @click="modifyFinish">네</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogWithdrawal" persistent max-width="290">
                  <v-btn slot="activator" >회원 탈퇴하기</v-btn>
                  <v-card>
                    <v-card-title class="headline">회원 탈퇴</v-card-title>
                    <v-card-text>정말 탈퇴하시겠습니까?</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click="dialogWithdrawal = false">아니오</v-btn>
                      <v-btn color="green darken-1" flat @click="withdrawalProcess">네</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

              </v-layout>

              <v-layout wrap v-else>
                <v-flex xs12 sm4>
                <v-radio-group 
                    v-model="userGender" 
                    :mandatory="false" 
                    :rules="[() => !!userGender || 'This field is required']"
                    required
                    disabled
                    row>
                    <v-radio label="남자" value="남자"></v-radio>
                    <v-radio label="여자" value="여자"></v-radio>
                  </v-radio-group>
                </v-flex>

                <v-flex xs12 sm4>
                  <v-text-field
                    label="태어난 해를 입력해주세요 ex) 1990"
                    type="number"
                    id="userBirth"
                    name="userBirth"
                    v-model="userBirth"
                    maxlength="4"
                    :rules="[rules.required, () => !!userBirth || 'This field is required']"
                    required
                    disabled
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                  <label for="userJob">직업은요?</label>
                  <v-select 
                    v-model="userJob"
                    :items="jobs"
                    :rules="[() => !!userJob || 'This field is required']"
                    required
                    disabled
                  ></v-select>
                </v-flex>

                <v-flex xs12>
                  <label for="userLive">사는 곳</label>
                  <v-select 
                    v-model="userLive"
                    :items="lives" 
                    :rules="[() => !!userLive || 'This field is required']"
                    required
                    disabled
                  ></v-select>
                </v-flex>

                <v-flex xs12>
                  <v-text-field
                    label="아이디"
                    id="userId"
                    name="userId"
                    v-model="userId"
                    :rules="[() => !!userId || 'This field is required']"
                    required
                    disabled
                  ></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-text-field
                    label="비밀번호는요?"
                    id="userPw"
                    name="userPw"
                    v-model="userPw"
                    type="password"
                    :rules="[() => !!userPw || 'This field is required']"
                    required
                    disabled
                  ></v-text-field>
                </v-flex>


                <v-dialog v-model="dialogModify" persistent max-width="290">
                  <v-btn slot="activator" >내 정보 수정하기</v-btn>
                  <v-card>
                    <v-card-title class="headline">정보 수정</v-card-title>
                    <v-card-text>내 정보를 수정하겠습니까?</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click="dialogModify = false">아니오</v-btn>
                      <v-btn color="green darken-1" flat @click="modifyProcess">네</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogWithdrawal" persistent max-width="290">
                  <v-btn slot="activator" >회원 탈퇴하기</v-btn>
                  <v-card>
                    <v-card-title class="headline">회원 탈퇴</v-card-title>
                    <v-card-text>정말 탈퇴하시겠습니까?</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click="dialogWithdrawal = false">아니오</v-btn>
                      <v-btn color="green darken-1" flat @click="withdrawalProcess">네</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
            </v-card-title>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
    <!-- <p>유저이름 {{userName}}</p>
    <p>유저아이디 {{userId}}</p>
    <p>유저패스워드 {{userPw}}</p>
    <p>유저패스워드확인 {{userPwConfirm}</p>
    <p>유저사는곳 {{userLive}}</p>
    <p>유저생일 {{userBirth}}</p>
    <p>유저직업 {{userJob}}</p>
    <p>유저성별 {{userGender}}</p> -->

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
      userName : '',
      userId : '',
      userPw : '',
      userPwConfirm : '',
      userLive : '',
      userBirth  : '',
      userJob : '',
      userGender : '',

      jobs :['무직','중학생','고등학생','대학생','주부','회사원','자영업자','예체능계열','기타'],
      lives : ['서울특별시','경기도(인천 포함)','강원도','충청도(대전,세종 포함)','경상도(대구,울산,부산 포함)','전라도(광주 포함)','제주도'],
      

      rules: {
          required: value => !!value || 'Required.',
          // counter: value => value.length <= 4 || '4자리 숫자로 입력해주세요',
      },

      dialogWithdrawal : false,
      dialogModify :  false, 
      modify : false 
    }
  },
  methods:{
    modifyFinish:function(){
      this.modify = false
      this.dialogModify = false
      this.$http.post('/users/modify',
      {
        userName : this.userName,
        userId  : this.userId,
        userPw  : this.userPw,  
        userLive : this.userLive,
        userGender : this.userGender,   
        userBirth : this.userBirth,   
        userJob : this.userJob,   
      })
      .then((response)=>{

      })
    },
    //회원 정보 수정 창으로 접근
    modifyProcess:function(){
      this.modify = true
      this.dialogModify = false
    },
    //회원 탈퇴
    withdrawalProcess:function(){
      var userData = this.$session.get('userData')
      var findId = userData.userId
      this.$http.post('/users/withdrawal',
        {
          userId: findId
        }).then((response)=>{
          this.$session.destroy()
          alert("탈퇴가 완료되었습니다.")
          this.$router.push('/')
      })     
    }

  },
  mounted:function(){
    var findId = this.$session.get('userData')

     this.$http.post('/users/find',
      {
        id: findId.userId
      }).then((response)=>{
        console.log("test")
        console.log(response.data)
        this.userName = response.data.userName
        this.userId = response.data.userId
        this.userPw = response.data.userPw
        this.userPwConfirm = response.data.userPw
        this.userGender = response.data.userGender
        this.userBirth = response.data.userBirth
        this.userJob = response.data.userJob
        this.userLive = response.data.userLive
      })
  }
}
</script>
<style>

</style>
 