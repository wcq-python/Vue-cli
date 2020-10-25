<template>
    <div>
        ID：<input type="text" v-model="add_id"><br>
        姓名：<input type="text" v-model="add_name"><br>
        年龄：<input type="text" v-model="add_age"><br>
        <input type="button" @click="submit" value="提交">
    </div>
</template>

<script>
import user from "./user";

export default {
    name: "add",
    data:function(){
        return{
            add_id:'',
            add_name:'',
            add_age:'',
            // 判断存储的users是否有值，若有则从localstorage取值，否则为空列表
            users:localStorage.users? JSON.parse(localStorage.getItem('users')):[],
        }
    },
    methods:{
        submit(){
            // user为一个对象
            let user={
                id:this.add_id,
                name:this.add_name,
                age:this.add_age,
            }
            console.log(user)
            console.log(this.users)
            // 将user添加进users列表中
            this.users.push(user)
            console.log(this.users)
            // 将userJSON格式化
            localStorage.users = JSON.stringify(this.users)
            // users存储完毕后返回user界面
            this.$router.push('/user')
        }
    },
}
</script>

<style scoped>

</style>
