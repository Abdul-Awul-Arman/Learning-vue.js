<template>
    <div>
        <h1>Blog post</h1>
        <PostCard v-for="post in posts" :post="post"/>
    </div>
</template>
<script setup>
const {posts,isLoading}=usePosts();

</script>
<style scoped>
.home {
  padding: 20px;
}
</style>