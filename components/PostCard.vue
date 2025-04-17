<template>
  <div class="post-card">
    <Transition name="fade">
      <h1 class="post-title">User ID: {{ post.title }}</h1>
    </Transition>

    <p class="post-body">
      <span class="label">Title:</span> {{ post.body }}
    </p>

    <NuxtLink class="details-link" :to="`/${post.id}`">Details</NuxtLink>

    <div class="buttons">
      <button @click="toggle = !toggle" class="btn toggle-btn">Hide Title</button>
      <button @click="updatePost()" class="btn delete-btn">Delete</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post:{
    type:Object
  },
  updatePost:{
    type:Function
  }
})




const toggle = ref(true)




</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
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
  color: #4f46e5;
  margin-bottom: 12px;
}

.post-body {
  font-size: 1rem;
  color: #333;
  margin-bottom: 12px;
}

.label {
  font-weight: 600;
  color: #555;
  margin-right: 4px;
}

.details-link {
  display: inline-block;
  margin-bottom: 16px;
  color: #3b82f6;
  font-weight: 500;
  text-decoration: none;
}
.details-link:hover {
  text-decoration: underline;
}

.buttons {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-btn {
  background-color: #6366f1;
  color: white;
}
.toggle-btn:hover {
  background-color: #4f46e5;
}

.delete-btn {
  background-color: #ef4444;
  color: white;
}
.delete-btn:hover {
  background-color: #dc2626;
}
</style>
