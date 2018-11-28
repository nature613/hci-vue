<template>
  <div>
    <v-text-field
      class="mb-0 pb-0"
      v-model="search"
      label="Search"
      :append-outer-icon="'search'"
      solo
      clearable
      @click:clear="clearSearch"
      @click:append-outer="searchContent"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name : 'SearchBar',
  data:function(){
    return{
      search : ''
    }
  },
  methods:{
    clearSearch () {
        this.search = ''
    },
    searchContent(){

    }
  }
}
</script>

<style>
  v-messages{
    display:none
  }

</style>

