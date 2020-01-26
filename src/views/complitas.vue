<template>
    <div class="maker">
        <h1>List of Complitas</h1>
        <div v-for="complita in complitas" :key="complita.id" class="complita">
            <router-link :to="{name:'complita', params: {id: complita.id}}">
                <div>Fajita ID: {{complita.id}}-{{complita.meat.name}}</div>
            </router-link>    
        </div>
    </div>    
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'FajitaMaker',
    props:[],
    components:{},
    computed: {
        ...mapState({
            contents: 'contents',
            complitas: 'complitas',
        })
    },
    
    methods: {
        viewComplita() {
            const complita={
                id: 1+this.complitas.length,
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
