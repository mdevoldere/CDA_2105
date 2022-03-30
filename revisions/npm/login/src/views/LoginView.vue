<template>
    <form>
        <h2>{{ formTitle }}</h2>
        <label for="uname">Username</label>
        <input id="uname" type="text" placeholder="Username"> 
        <label for="upass">Password</label>
        <input id="upass" type="password" placeholder="Password"> 
        <button>Login</button> 
        <p>Forgot password ?</p>
    </form>
</template>

<style>
form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
</style>

<script>
export default {
    data() {
        return {
            formTitle: "Type your credentials"
        }
    }, 
    computed: {
    },
    methods: {

    }


}
</script>
