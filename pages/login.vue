<template>
    <div>
        <form @submit.prevent="handleLogin" >
            <label>User Name    
                <input type="text"  v-model="userName"> <br>
            </label>
            <br>
            <label for="Password" >Password </label>
            <input type="password" id="Password" v-model="password"/>
            <button>Login</button>
        </form>
        <p>{{ error }}</p>
        
    </div>
</template>

<script setup>
import { ErrorCodes } from 'vue';


const userName=ref("")
const password=ref("")
const router=useRouter();
const error=ref("");

function handleLogin(){
    if(userName.value==="admin" && password.value==="1234"){

        const token=useCookie('token');
        token.value="1234";
        router.push('/');
    }else{
        error.value="invalid credential"
    }

}





</script>