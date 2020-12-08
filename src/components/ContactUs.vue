<template>
    <!-- CONTACT FORM BEGINNING -->
    <div class="contact__form-wrapper">
        <PulseLoader :loading="loading" :color="color" :size="size"></PulseLoader>
        <div class="contact__form-wrapper-inner">
            <form id="contact__form"
                  @submit="handleFormSubmit"
                  type="post">
                <h2>Contact Us</h2>
                <div class="contact__form-container">
                    <label for="email-address">Enter your email:</label>
                    <input placeholder="Email address"
                           v-bind:class="responseClassName"
                           autocomplete="off"
                           type="text"
                           name="email"
                           id="email-address"/>
                </div>

                <div class="contact__form-container contact__form-container-textarea">
                    <label for="message">Message:</label>
                    <textarea placeholder="Send us message"
                              v-bind:class="responseClassName"
                              autocomplete="off"
                              type="text"
                              name="message"
                              id="message"/>
                </div>
                <p class="contact__form-message" v-bind:class="responseClassName">{{responseMessage}}</p>
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
            return {
                responseMessage: '',
                responseClassName: '',
                loading: false,
                color: '#5dc596',
                size: '45px',
                margin: '30px',
                radius: '100%'
            }
        },

        methods: {
            handleFormSubmit: function (event) {
                this.loading = true;
                event.preventDefault();
                const serverApi = require('../../config/helpers');
                let httpRequestUrl = serverApi.apiUrl();
                let email = event.target.email.value;
                let message = event.target.message.value;

                fetch(httpRequestUrl, {
                    method: 'post',
                    body: JSON.stringify({
                        "email": email,
                        "message": message
                    }),
                    headers: {"Content-Type": "application/json"}
                }).then(response => response.json())
                    .then(resData => {
                        // Setting timeout because of showing loader functionality
                        setTimeout(() => {
                            this.responseClassName = resData.responseClassName;
                            this.responseMessage = resData.responseMessage;
                            this.loading = false;
                        }, 1000)

                    }).catch(error => {
                    console.log(error)
                });
            }
        },

        created() {

        },

        computed: {}
    }
</script>


<style lang="scss" scoped>
    @import "../assets/stylesheets/sections/contact-form";

    input.validation-success,
    textarea.validation-success {
        border: 1px solid $validation-success;
    }

    input.validation-error,
    textarea.validation-error {
        border: 1px solid $validation-error;
    }

    .validation-success,
    .validation-error {
        font-family: $font-semi-bold;
    }

    .validation-success {
        color: $validation-success;
    }

    .validation-error {
        color: $validation-error;
    }

    .v-spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>