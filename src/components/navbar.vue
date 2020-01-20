<template>
    <div class="navbar">
        <span clas="title">The Fajita-tron</span>
        <router-link :to="{ name: 'fajita-maker' }">
            Make A Fajita
        </router-link>
        <router-link :to="{ name: 'contents' }">
            Contents List
        </router-link>
        <router-link :to="{ name: 'complitas' }">
            Completed Fajitas List (Compl-itas)
        </router-link>
    </div>    
</template>

<script>

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
