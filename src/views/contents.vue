<template>
    <div class="contents">
        <h1>List of Contents</h1>
        <div v-for="content in contents" :key="content">
            {{ content.amount }} of {{ content.name }}
        </div>
        <input v-model="content.name">
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
            content: '',
        }
    },
    methods: {
        addContent() {
            this.$store.dispatch('addContent', this.content.name);
            this.content.name = '';
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
