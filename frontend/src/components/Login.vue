<template>
<div>
  <v-container text-xs-center>
    <v-layout column d-block align-center justify-center>
      <v-flex center ma-5>
        <h1 >LOGO</h1>
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
      <p>test ::::: {{test}}</p>
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
      test : '',
      msg : ''
    }
  },
  methods:{
    loginProcess: function(){
      this.$http.post('/test/login',
      {
        loginId:this.inputId,
        loginPw:this.inputPw
      }).then((response)=>{
        if(response.status === 200  && 'token' in response.data){
          console.log(response)
          console.log(response.data)
          console.log(response.body)
          console.log(response.status)
          this.$session.start()
          this.$session.set('jwt', response.data.token)
          this.$router.push('/simple-deep') 
          this.test = 'success'
        }else{
          this.test = 'fail'
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
