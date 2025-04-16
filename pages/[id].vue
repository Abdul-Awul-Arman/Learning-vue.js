<template>

        <div v-if="isLoading" class="loading">Loading posts...</div>
        <div v-else class="post-card">
            <h1 class="post-title">Post Title: {{ post.title }}</h1>    
            <p class="post-body"><span class="label">Title:</span> {{ post.body }}</p>
        </div>
    
</template>
<script setup>
import { usePosts } from '#imports';
import { useRoute } from 'vue-router';

definePageMeta({
    layout:'default',

});
const router=useRoute();
const {post,isLoading}=usePosts(router.params.id)


</script>
<style scoped>
.post-card {
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.post-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4f46e5; /* Indigo-600 */
  margin-bottom: 12px;
}

.post-body, .post-id {
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
}

.label {
  font-weight: 600;
  color: #555;
  margin-right: 4px;
}

.loading {
  font-size: 18px;
  color: #888;
}
</style>