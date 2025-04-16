<template>
  <div class="home">
    <h1 class="title">📝 Blog Posts</h1>

    <div v-if="isLoading" class="loading">Loading posts...</div>
   
    <div v-else class="posts">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
const { posts, isLoading } = usePosts()
</script>

<style scoped>
.home {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #2c3e50;
}

.loading {
  font-size: 18px;
  color: #888;
}

.posts {
  display: grid;
  gap: 20px;
}
</style>
