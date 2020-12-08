<template>
    <div class="content-main">
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
    body {
        margin: 0 !important;
        position: relative;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: $color-background-icon;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
