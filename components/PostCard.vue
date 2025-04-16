<template>

     <div class="post-card">
      <Transition>
      <h1 v-if="toggle" class="post-title">User ID: {{ post.title }}</h1>    
      </Transition>
       <p class="post-body"><span class="label">Title:</span> {{ post.body }}</p>
       <NuxtLink :to="`/${post.id}`">Details</NuxtLink> &nabla;
       <button @click="toggle=!toggle">Hide Title</button>
      </div>
</template>

<script setup>
const props = defineProps({
  post: Object,
});

const toggle=ref(true)


</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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
</style>
