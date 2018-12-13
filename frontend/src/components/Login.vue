<template>
<div>
  <v-container text-xs-center>
    <v-layout column d-block align-center justify-center>
      <v-flex center ma-5>
        <h1 >Modoo</h1>
      </v-flex>
      <v-flex>
        <v-form>
          <v-text-field
            v-model="inputId"
            :counter="10"
            label="아이디"
            required
          ></v-text-field>
          <v-text-field
            v-model="inputPw"
            label="비밀번호"
            type="password"
            required
          ></v-text-field>
          <v-btn v-on:click="loginProcess(inputId, inputPw)" block color="secondary">로그인</v-btn>
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
      inputId : '',
    }
  },
  methods:{
    loginProcess: function(){
      this.$http.post('/users/login',
      {
        loginId:this.inputId,
        loginPw:this.inputPw
      }).then((response)=>{
        if(response.data.token){
          if(response.status === 200){
            // 각종 데이터 콘솔창 띄워보기
            console.log(response)
            console.log(response.data)
            console.log(response.body)
            console.log(response.status)
            this.$session.start()
            this.$session.set('uid', response.data.token)           //세션에 jwt 란 key로 token 저장
            this.$session.set('userData', response.data.userData)   //세션에 userData 로 user정보가 담긴 객체 저장
            this.$router.push('/simple-deep')
          }
        }else{
          alert("잘못된 아이디/패스워드 입니다.")
        }
      },function(err){
        console.log('err',err)
        })
      }
    // vuex를 사용한 로그인 
    // loginProcess : function(loginId,loginPw){
    //   this.$store.dispatch('LOGIN',{loginId, loginPw})
    //     .then(()=>this.$router.push('/simple-deep'))
    //     .catch(({message}) => this.msg = message)
    // }
  },
}
</script>
<style>

</style>
