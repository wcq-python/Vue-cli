<template>
    <div>
        <table>
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>操作</td>
            </tr>
            <tr v-for="(user,index) in users" :key="index">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td><a href="javascript:void(0);" @click="del(index)">删除</a>| <router-link :to="`/check/${user.id}/${user.name}/${user.age}/${index}`">详情</router-link> </td>
            </tr>
        </table>
        <router-link to="/add">添加</router-link>
    </div>
</template>

<script>
export default {
    name: "user",
    data:function(){
        return{
            // 从localstorage中取值，若存在则取出并JSON格式化，否则返回空列表
            users: localStorage.users? JSON.parse(localStorage.users):[]
        }
    },
    methods:{
        // 删除时要从users中删除该对象，然后再将users存入localstorage进行更新
        del(index){
            this.users.splice(index,1)
            localStorage.users = JSON.stringify(this.users)
        },
    },
}
</script>

<style scoped>

</style>
