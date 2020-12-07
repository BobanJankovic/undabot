<template>
    <div>
        <Header></Header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data: () => {
            return {}
        },
        computed: {}
    }
</script>

<style lang="scss">

</style>
