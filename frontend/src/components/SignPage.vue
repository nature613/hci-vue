<template>
  <div>
    <Toolbar/>
    <v-form action="/api/sign-process" method="post">
      <v-container>
        <v-layout column>
          <v-flex>
            <v-text-field
              label="이름이 뭐에요?"
              id="signName"
              name="signName"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="아이디"
              id="signId"
              name="signId"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="비밀번호는요?"
              id="signPw"
              name="signPw"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              label="비밀번호를 다시 입력해주세요"
              id="signPwRe"
              name="signPwRe"
            ></v-text-field>
          </v-flex>
          <p>성별은요?</p>
          <v-layout row>
            <v-flex>
              <v-btn block>남자</v-btn>
            </v-flex>
            <v-flex>
              <v-btn block>여자</v-btn>
            </v-flex>
          </v-layout>
          <v-flex>
            <v-text-field
              label="생년월일을 8자리로 입력해주세요"
              type="number"
              :counter="8"
              id="signBirth"
              name="signBirth"
            ></v-text-field>
          </v-flex>
          <p>결혼하셨나요?</p>
          <v-layout row>
            <v-flex>
              <v-btn block>기혼</v-btn>
            </v-flex>
            <v-flex>
              <v-btn block>미혼</v-btn>
            </v-flex>
          </v-layout>
          <v-flex>
            <label for="signJob">사는곳은요?</label>
            <select id="signJob" name="signJob" required>
              <option>학생</option>
              <option>주부</option>
              <option>회사원</option>
              <option>등등</option>
            </select>
          </v-flex>
          <v-flex>
            <label for="signLive">사는 곳</label>
            <select id="signLive" name="signLive">
              <option>서울특별시</option>
              <option>경기도</option>
              <option>강원도</option>
              <option>전라도</option>
              <option>경상도</option>
            </select>
          </v-flex>
          <v-flex>
            <v-dialog v-model="dialog" persistent max-width="290">
              <v-btn slot="activator" block>완료</v-btn>
              <v-card>
                <v-card-title class="headline">가입이 완료되었습니다.</v-card-title>
                <v-card-text>로그인 해주세요.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn href="/" color="green darken-1" flat @click="dialog = false">승인</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'

export default {
  name: 'SimpleDeep',
  components:{
    Toolbar
  },
  data: function(){
    return {
      selected:'',
      jobs :['학생','주부','회사원'],
      live : ['서울특별시','경기도','강원도','전라도','경상도'],
      dialog: false
    }
  }
}
</script>
<style>

</style>
