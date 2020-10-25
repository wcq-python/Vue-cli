<template>
    <div>
        <input type="text" v-model="msg">
        <input type="button" value="提交留言" @click="commit">
        <br>
        <ul>
            <li v-for="message in messages">{{message}}</li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "index",
    data:function(){
        return {
            msg: '',
            messages: localStorage.msgs? JSON.parse(localStorage.msgs):[],
        }
        },
    methods:{
        commit(){
            if(this.msg!==''){
                this.messages.unshift(this.msg);
                this.msg = '';
                localStorage.msgs = JSON.stringify(this.messages)
            }


        }
    }
}

</script>

<style scoped>

</style>
