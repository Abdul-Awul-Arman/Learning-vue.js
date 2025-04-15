<template>
  {{post.title }}
  <h1>This is postcard</h1>
</template>
<script setup>
const props=defineProps({
    post:Object,

});

console.log(props)
</script>