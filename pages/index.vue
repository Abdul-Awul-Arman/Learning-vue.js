<template>
  <div class="home">
    <h1 class="title">📝 Blog Posts</h1>

   <h1 v-if="data.length===0" >There is no post</h1>
    <div v-else class="posts">
      <PostCard v-for="post in data" :key="post.id" :post="post" :updatePost="()=>updatePost(post.id)" />
    </div>
  </div>
</template>

<script setup>

const data=ref([]);

onMounted(()=>{
  if(!localStorage.getItem('data')){
    
    localStorage.setItem("data",JSON.stringify([])) ;
  }
  data.value=JSON.parse(localStorage.getItem("data"));
  
})

function updatePost(id){
  let existing= JSON.parse(localStorage.getItem("data"))
   let newArray= existing.filter((item)=>id !=item.id)

   localStorage.setItem("data",JSON.stringify(newArray));


};

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
