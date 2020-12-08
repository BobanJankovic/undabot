<template>
    <!-- CONTACT FORM BEGINNING -->
    <div class="contact__form-wrapper">
        <div class="contact__form-wrapper-inner">
            <form id="contact__form"
                  type="post">
                <h2>Contact Us</h2>
                <div class="contact__form-container">
                    <label for="email-address">Enter your email:</label>
                    <input placeholder="Email address"
                           autocomplete="off"
                           type="text"
                           name="email"
                           id="email-address"/>
                </div>

                <div class="contact__form-container">
                    <label for="message">Message:</label>
                    <textarea placeholder="Send us message"
                              autocomplete="off"
                              type="text"
                              name="message"
                              id="message"/>
                </div>
                <div class="contact__form-submit-container">
                    <input id="submit-contact-form"
                           class="contact__form-button"
                           type="submit"
                           name="submit-contact-form"/>
                </div>
            </form>
        </div>
    </div>
    <!-- CONTACT FORM END -->
</template>


<script>
    export default {
        components: {},
        data: function () {
            return {}
        },

        methods: {},

        created() {

        },

        computed: {}
    }
</script>


<style lang="scss" scoped>
    @import "../assets/stylesheets/sections/contact-form";
</style>