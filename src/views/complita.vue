<template>
    <div class="maker">
        <h1>Complita: {{ id }}</h1>
        <div>Warm flour tortilla</div>
        <div v-show="complita.content.length>0">Content:{{complita.content}}</div>
    </div>    
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'FajitaMaker',
    props: ['id'],
    computed: {
        ...mapState({
            complitas: 'complitas'
        })
    },
    created() {
        this.complita=this.complitas.find(complita => this.id === complita.id);
    },
    data() {
        return {
            complita: {}
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
    flex-flow: row nowrrap;
    justify-content: space-around;
    align-items: center;
    margin: 50px;
}

button {
    padding: 30px;
    font-size: 20px;
    margin: 20px
}

</style>
