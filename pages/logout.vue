<template>
    <div>
        <button @click="handleLogout">Logout</button>
        
    </div>
</template>

<script setup>
const router=useRouter();

function handleLogout(){

    const token =useCookie("token");

    token.value=null;

    router.push("/login")
    
}





</script>