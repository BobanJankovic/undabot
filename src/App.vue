<template>
    <div class="content-main">
        <Header></Header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <Footer></Footer>
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
    $footer-height: 300px;
    body {
        margin: 0 !important;
        position: relative;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0
    }

    .content-main {
        min-height: 100vh;
        position: relative;
        padding-bottom: $footer-height;
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
