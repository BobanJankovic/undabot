<template>
    <!-- HEADER NAVIGATION BEGINNING -->
    <div class="header__nav">
        <ul class="header__nav-list">
            <router-link tag="li" to="/" active-class="active" exact>
                <a @click="closeNavigation">Home Page</a>
            </router-link>
            <router-link tag="li" to="/contact">
                <a @click="closeNavigation">Contact Us</a>
            </router-link>
        </ul>
    </div>
    <!-- HEADER NAVIGATION END -->
</template>

<script>
    export default {
        data: function () {
            return {
                isDesktop: window.innerWidth > 768
            }
        },
        methods: {
            closeNavigation: function () {
                if (!this.isDesktop) {
                    this.$emit("toggleNav", false);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/stylesheets/sections/header-nav";
</style>