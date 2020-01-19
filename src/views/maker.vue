<template>
    <div class="maker">
        <h1>Fajita-tron Assembler</h1>
        <h2>Select your Ingredients</h2>
        <div class="ingredients">
            <div>
                <div class="title">Meats</div>
                <select  v-model="content" v-if content.category === "meat">
                    <option v-for="content in contents" :key="content">{{ content.amount }} of {{ content.name }}</option>
                </select>
                <div class="title">Veggies</div>
                <select v-model="content" >
                    <option v-for="content in contents" :key="content">{{ content.amount }} of {{ content.name }}</option>
                </select>
                <div class="title">Toppings</div>
                <select v-model="content" >
                    <option v-for="content in contents" :key="content">{{ content.amount }} of {{ content.name }}</option>
                </select>
            </div> 
        </div>
        <h2>This fajita currently has:</h2>
        <div class="fajita">
            <div>A warm flour tortilla</div>   
            <div v-show="content.length>0">{{ content }}</div>
            <button @click="addComplita">Wrap this fajita up!</button>
        </div>
        <div v-if="complitas.length>0" class="complita.id">
            <h2>Complitas list</h2>
            <div v-for="complita in complitas" :key="complita.id">
                {{ complita.id }} - Fajita with {{ complita.content }}
            </div>
        </div>        
    </div>
</template>

<script>
    import {mapState} from 'vuex'

export default {
    name: 'FajitaMaker',
    props: [],
    components: [],
    computed: {
        ...mapState({
            contents: 'contents',
            complitas: 'complitas'
        })
    },
    data() {
        return {
            content:''
        }
    },
    created() {
    },
    mounted () {
    },
    updated() {
    },
    destroyed() {
    },
    methods: {
        addComplita() {
            const complita={
                id:1+this.complitas.length,
                content: this.content
            };
            this.$store.dispatch('addComplita', complita)
        }
    }
}
</script>

<style scoped lang="scss">

.fajita {
    margin: 50px;
}

.ingredients {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 50px;
}

button {
    padding: 30px;
    font-size: 20px;
    margin: 20px;
}
</style>