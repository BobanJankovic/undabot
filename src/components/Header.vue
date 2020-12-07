<template>
    <!-- HEADER SECTION BEGINNING -->
    <header class="header">
        <div class="header__container">
            <div class="header__container-inner">
                <div class="header__logo-container">
                    <a class="header__logo" href="/index.html">
                        Always outdors
                    </a>
                </div>
                <transition name="slide">
                    <navigation v-if="animate" v-on:toggleNav="animate=false"></navigation>
                </transition>
                <div class="header__nav-desktop">
                    <navigation></navigation>
                </div>
                <div class="header__search">
                    <a class="header__search-icon">
                        <span class="header__search-text">Search</span>
                    </a>
                </div>
                <div class="header__nav-toggle-container">
                    <div @click="animate = !animate" v-bind:class="{ 'button-open': animate }"
                         class="header__nav-toggle">
                        <div class="header__nav-toggle-wrap">
                            <div class="header__nav-bar header__nav-bar--top"></div>
                            <div class="header__nav-bar header__nav-bar--middle"></div>
                            <div class="header__nav-bar header__nav-bar--bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- HEADER SECTION END -->
</template>

<script>
    import Navigation from "@/components/Navigation";

    export default {
        components: {Navigation},
        data: function () {
            return {
                animate: false,
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../assets/stylesheets/sections/header";
</style>
