<template>
  <div class="home">
    <h1 class="title">📝 Blog Posts</h1>

    <Transition>
     <h1 v-if="data.length===0" >There is no post</h1>

     <div v-else class="posts">
       <PostCard @postId="postIdEvent" v-for="post in data" :key="post.id" :post="post" />
       </div>
      </Transition>
      <Teleport to="body">
         <div v-if="isShow" class="modal-backdrop">
            <div class="modal-content">
           <p>Do You Want Delete The Post</p>
           <button class="btn" @click="updatePost(id)">Yes</button> &nabla;
           <button class="btn" @click="isShow=false">No</button>
            </div>
         </div>
      </Teleport>
      
  </div>
</template>

<script setup>

const data=ref([]);
const isShow=ref(false);
const id=ref(0)

onMounted(()=>{
  if(!localStorage.getItem('data')){
    
    localStorage.setItem("data",JSON.stringify([])) ;
  }
  data.value=JSON.parse(localStorage.getItem("data")); 
  
})

function postIdEvent(postId){
  id.value=postId;
   isShow.value=true
}

 function updatePost(id){
  let existing= JSON.parse(localStorage.getItem("data"))
   let newArray= existing.filter((item)=>id !=item.id)

   localStorage.setItem("data",JSON.stringify(newArray));
   data.value=newArray;
   isShow.value=false;
  console.log(data.value)

};
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

/* Modal backdrop */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

/* Modal box */
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  position: relative;
  animation: fadeIn 0.3s ease-out;
}

/* Optional close button */
.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
}

/* Fade animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

</style>
