<template>
  <div>
    <ToolbarSign></ToolbarSign>
    <v-form>
      <v-container>
        <v-layout column>
          <v-flex>
            <v-text-field
              label="이름이 뭐에요?"
              id="signName"
              name="signName"
              v-model="signName"
              :rules="[() => !!signName || 'This field is required']"
              required
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="아이디"
              id="signId"
              name="signId"
              v-model="signId"
              :rules="[() => !!signId || 'This field is required']"
              required
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="비밀번호는요?"
              id="signPw"
              name="signPw"
              v-model="signPw"
              type="password"
              :rules="[() => !!signPw || 'This field is required']"
              required
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="비밀번호를 다시 입력해주세요"
              id="signPwRe"
              name="signPwRe"
              v-model="signPwRe"
              type="password"
              :rules="[() => !!signPwRe || 'This field is required']"
              required
            ></v-text-field>
          </v-flex>
          <p>성별은요?</p>
          <v-layout row>
            <v-radio-group 
              v-model="signGender" 
              :mandatory="false" 
              :rules="[() => !!signGender || 'This field is required']"
              required
              row>
              <v-radio label="남자" value="남자"></v-radio>
              <v-radio label="여자" value="여자"></v-radio>
            </v-radio-group>
          </v-layout>
          <v-flex>
            <v-text-field
              label="생년월일을 8자리로 입력해주세요"
              type="number"
              :counter="8"
              id="signBirth"
              name="signBirth"
              v-model="signBirth"
              :rules="[() => !!signBirth || 'This field is required']"
              required
            ></v-text-field>
          </v-flex>
          <v-flex>
            <label for="signJob">직업은요?</label>
            <v-select 
              v-model="signJob"
              :items="jobs"
              :rules="[() => !!signJob || 'This field is required']"
              required
            ></v-select>
          </v-flex>
          <v-flex>
            <label for="signLive">사는 곳</label>
             <v-select 
              v-model="signLive"
              :items="lives" 
              :rules="[() => !!signLive || 'This field is required']"
              required
            ></v-select>
          </v-flex>
          <v-flex>
            <v-btn block v-on:click="signProcess">완료</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <p>*****test value*****</p>
    <p>signName : {{signName}}</p>
    <p>signId : {{signId}}</p>
    <p>signPw : {{signPw}}</p>
    <p>signPwRe: {{signPwRe}}</p>
    <p>signJob: {{signJob}}</p>
    <p>signLive: {{signLive}}</p>
    <p>signGender: {{signGender}}</p>
    <p>signBirth: {{signBirth}}</p>
    <p>*****test value*****</p>
  </div>
</template>
<script>
import ToolbarSign from './ToolbarSign.vue'

export default {
  name: 'SimpleDeep',
  components:{
    ToolbarSign
  },
  data: function(){
    return {
      selected:'',
      jobs :['무직','중학생','고등학생','대학생','주부','회사원','자영업자','예체능계열','기타'],
      lives : ['서울특별시','경기도','강원도','충청남도','충청북도','전라북도','전라남도','경상북도','경상남도','제주도'],
      dialog: false,
      signName: '',
      signId: '',
      signPw: '',
      signPwRe: '',
      signGender: '',
      signJob: '',
      signLive: '',
      signBirth: ''
    }
  },
  methods:{
    signProcess:function(){
      if(this.signPw === this.signPwRe){
        this.$http.post('/users/sign-process',
          {
            signName: this.signName,
            signId: this.signId,
            signPw: this.signPw,
            signGender: this.signGender,
            signJob: this.signJob,
            signLive: this.signLive,
            signBirth: this.signBirth
          }
        ).then((response)=>{
          //회원가입에  대한 response 받아서 처리하는 부분
          if(response.data === "success"){
            console.log("회원가입이 완료되었습니다.")
            alert("회원가입이 완료되었습니다.")
            this.$router.push('/')
          }else if(response.data === "fail"){
            alert("사용할 수 없는 아이디입니다.")
            console.log("사용할 수 없는 아이디입니다")
          }
        })
      }else{
        alert("비밀번호가 일치하지 않습니다.")
        console.log("비밀번호가 일치하지 않습니다.")
      }
    }
  }
}
</script>
<style>

</style>
