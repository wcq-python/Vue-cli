<template>
    <div>
        ID:{{$route.params.id}}<br>
        姓名：<input type="text" v-model="name"><br>
        年龄：<input type="text" v-model="age"><br>
        <input type="button" value="提交" @click="submit">
    </div>
</template>

<script>
export default {
    name: "check",
    data:function(){
        return{
            name:this.$route.params.name,
            age:this.$route.params.age,
        }
    },
    methods:{
        submit(){
            let index = this.$route.params.index
            let users = JSON.parse(localStorage.users)
            users[index].name = this.name
            users[index].age = this.age
            localStorage.users = JSON.stringify(users)
            this.$router.push('/user')
        }
    }
}

</script>

<style scoped>

</style>
