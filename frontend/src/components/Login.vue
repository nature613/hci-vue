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
    // loginProcess: function(){
    //   this.$http.post('/user/login',
    //   {
    //     loginId:this.inputId,
    //     loginPw:this.inputPw
    //   }).then((response)=>{
    //     if(response.status === 200 && 'userName' in response.body){
    //       console.log(response.body)
    //       this.test = 'success'
    //     }else{
    //       this.test = 'fail'
    //     }
    //   })
    // }
    loginProcess : function(loginId,loginPw){
      this.$store.dispatch('LOGIN',{loginId, loginPw})
        .then(()=>this.$router.push('/simple-deep'))
        .catch(({message}) => this.msg = message)
    }
  }
}
</script>
<style>

</style>


this.axios.get('http://localhost:8000/doctor/list').then((response)=>{
        this.doctorList = response.data
      })