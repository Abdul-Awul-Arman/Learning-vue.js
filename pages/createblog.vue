<template>
  <div class="form-wrapper">
    <label  for="title" class="form-label">
      Title
      <input ref="my-input" v-model="title" type="text" name="title" class="form-input" />
    </label>

    <label for="description" class="form-label">
      Description
      <input v-model="description" type="text" name="description" class="form-input" />
    </label>

    <button @click="clickHandle" class="form-button">Add Post</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('')
const description = ref('');

const router =useRouter();

const input=useTemplateRef('my-input');
onMounted(()=>{
    
    input.value.focus();
})

function clickHandle(){

    
    const existing=JSON.parse(localStorage.getItem("data")) || [];
    
    let  post={
        userId: 1,
        id: existing.length+1,
        title:title.value,
        body:description.value,

    }

    console.log(post.id)
    existing.push(post);

    localStorage.setItem('data',JSON.stringify(existing));

    console.log(existing);

    title.value="";
    description.value="";
    
    router.push({path:"/"})

    
}

</script>

<style scoped>
.form-wrapper {
  max-width: 400px;
  margin: 50px auto;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-label {
  display: block;
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
}

.form-input {
  display: block;
  width: 100%;
  margin-top: 6px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  border-color: #4f46e5; /* Indigo */
  outline: none;
}

.form-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.form-button:hover {
  background-color: #4338ca;
}
</style>
