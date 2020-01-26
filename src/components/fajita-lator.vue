<template>
    <div class="fajita-lator">
        <span clas="title">The Fajita-lator</span>
        <router-link :to="{ name: 'fajita-maker' }">
            calculate cost
        </router-link>
        
    </div>    
</template>

<script>
export default {
name: 'Fajita-lator',
    props: ['id', 'complitas', 'cost'],
    computed: {
        ...mapState({
            complitas: 'complitas'
        })
    },
methods: {
    fajitalator() {
        const cost={
           id:1+this.complitas.length*2.99,
            content: this.content
            };
    }
    }
}
</script>

<style scoped lang="scss">
.navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    background: #006341;
    padding: 20px;
    color: #fff;
}
.title {
    font-size: 30px;
    font-weight: 600;
}
a {
    text-decoration: none;
    color: #fff;
}
a:hover {
    color: #CCC;
}
</style>
