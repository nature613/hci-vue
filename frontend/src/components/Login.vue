<template>
<div>
  <v-container text-xs-center>
    <v-layout column d-block align-center justify-center>
      <v-flex center ma-5>
        <h1 >LOGO</h1>
      </v-flex>
      <v-flex>
        <v-form v-model="valid" action="/api/login-process" method="post">
          <v-text-field
            v-model="inputId"
            :rules="nameRules"
            :counter="10"
            label="아이디"
            required
          ></v-text-field>
          <v-text-field
            v-model="inputPw"
            :rules="emailRules"
            label="비밀번호"
            type="password"
            required
          ></v-text-field>
          <v-btn type="submit" block color="secondary">로그인</v-btn>
        </v-form>
      </v-flex>
      <v-flex>
        <v-btn href="/sign-page">회원가입</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
export default {
  name: 'Login',
  data: function(){
    return{
      inputPw : '',
      inputId : ''
    }
  }
}
</script>
<style>

</style>
