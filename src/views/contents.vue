<template>
    <div class="contents">
        <h1>List of Contents</h1>
        <div v-for="(content, index) in contents" :key="index">
            {{ content.amount }} of {{ content.name }}
        </div>
        <h3>amount</h3>
        <input v-model="content.amount">
        <h3>condition</h3>
        <input v-model="content.condition">
        <h3>name</h3>
        <input v-model="content.name">
        <h3>category</h3>
        <input v-model="content.category">
<br>
        <button @click="addContent">Add Content</button>
    </div>    
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'ContentList',
    computed: {
        ...mapState({
            contents: 'contents'
        })
    },
    data() {
        return {
            content: {name:null, amount:null, condition:null, category:null},
        }
    },
    methods: {
        addContent() {
            this.$store.dispatch('addContent', this.content);
            this.content = {name:null, amount:null, condition:null, category:null};
        }
    }
}
</script>

<style scoped lang="scss">
    button {
        padding: 10px;
        font-size: 20px;
        margin: 20px;
    }
</style>
