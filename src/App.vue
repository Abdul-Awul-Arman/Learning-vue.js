<template>
<input v-model="obj.count" type="text" name="" id="">

</template>
<script setup>
import {reactive,watch} from 'vue';

const obj=reactive({count:0});

watch(obj,()=>{
  console.log(obj.count)
});

</script>
