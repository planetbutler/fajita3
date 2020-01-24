<template>
    <div class="maker">
        <h1>Fajita-tron Assembler</h1>
        <h2>Select your Ingredients</h2>
        <div class="ingredients">
            <div>
                <div class="title">Meats</div>
                <select  v-model="meat" >
                    <option v-for="(content, index) in meatoptions" :key="index">{{ content.amount }} of {{ content.name }}</option>
                </select>
                <div class="title">Veggies</div>
                <select v-model="veggie" >
                    <option v-for="(content, index) in veggieoptions" :key="index">{{ content.amount }} of {{ content.name }}</option>
                </select>
                <div class="title">Toppings</div>
                <select v-model="topping" >
                    <option v-for="(content, index) in toppingoptions" :key="index">{{ content.amount }} of {{ content.name }}</option>
                </select>
            </div> 
        </div>
        <h2>This fajita currently has:</h2>
        <div class="fajita">
            <div>A warm flour tortilla</div>   
            <div v-show="this.meatoptions.length>0">{{ content }}</div>
            <div v-show="this.veggieoptions.length>0">{{ content }}</div>
            <div v-show="this.toppingoptions.length>0">{{ content }}</div>
            <button @click="addComplita">Wrap this fajita up!</button>
        </div>
        <!--<div v-if="complitas.length>0" class="complita.id">
            <h2>Complitas list</h2>
            <div v-for="complita in complitas" :key="complita.id">
                {{ complita.id }} - Fajita with {{ complita.content }}
            </div>
        </div>--> 
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    /*import fajitaLatorVue from '../components/fajita-lator.vue'
-fajitaLatorVue*/

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
            meat:{name:null, amount:null, condition:null, category:null},
            veggie:{name:null, amount:null, condition:null, category:null},
            topping:{name:null, amount:null, condition:null, category:null},
            meatoptions:[],
            veggieoptions:[],
            toppingoptions:[],
        }
    },
    created() {this.meatoptions=this.contents.filter(item => item.category==='meat');
                this.veggieoptions=this.contents.filter(item => item.category==='veggie');
                this.toppingoptions=this.contents.filter(item => item.category==='topping');
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