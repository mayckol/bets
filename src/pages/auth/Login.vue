<template>
    <q-page class="flex flex-center bg-login">
        <div class="row main-login img-resp">
            <div class="login-wrapper">
                <form>
                    <div class="row">
                        <div class="col-sm-12">
                            <h1>Faça seu login</h1>
                        </div>
                        <div class="col-sm-12">
                            <p>Entre e faça sua aposta!</p>
                        </div>
                        <div class="col-sm-12 input-group">
                            <input v-model="username" type="email" class="input" placeholder="email">
                            <input v-model="password" type="password" class="input" placeholder="senha">
                            <div class="row justify-center q-gutter-x-xl">
                                <a href="/register">Cadastre-se</a>
                                <q-btn
                                        @click.stop.prevent="onSubmit"
                                        type="submit"
                                        rounded
                                        color="primary"
                                        size="md"
                                        label="Entrar"
                                />

                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <who-are-we></who-are-we>
        </div>
        <div class="row" style="margin-right: 6%; margin-left: 6%;">
            <how-to-bet></how-to-bet>
        </div>
    </q-page>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import WhoAreWe from "./WhoAreWe"
    import HowToBet from "./HowToBet"
    import MyFooter from "../../components/MyFooter"

    export default {
        name: 'Login',
        data() {
            return {
                username: "",
                password: ""
            };
        },
        computed: {
            // foo() {
            //   return this.$store.state.auth.foo;
            // },
            // token() {
            //   return this.$store.state.auth.token;
            // }
        },
        mounted() {
            // console.log("Getting foo element");
            // this.$store.dispatch("auth/getFoo");
        },
        methods: {
            async onSubmit() {
                // this.$q.loading.show();
                // console.log("login");
                // console.log("username", this.username, " | Password", this.password);
                await this.$store
                    .dispatch("auth/retrieveToken", {
                        username: this.username,
                        password: this.password
                    })
                    .then(response => {
                        // console.log("token..:", response);
                        this.$store.dispatch("auth/retrieveUser").then(res =>{

                            console.log(res.data)
                            if (res.data.permission === 1 || res.data.permission === 4){
                                this.$router.push({name: "dashboard"})
                            }
                            else {
                                this.$router.push({name: "dashboard-adm"})
                            }
                        })
                        // this.$q.loading.hide();
                    })
            }
        },
        components: {
            WhoAreWe,
            HowToBet,
            MyFooter
        }

    }
</script>
<style>

    .main-login {
        background-image: url("../../statics/img/login/main-bg.png");
    }

    .img-resp {
        width: 100%;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        z-index: 1;
    }

    .input {
        width: 100%;
        height: 50px;
        border-radius: 25px;
        border: none;
        margin-bottom: 15px;
        padding: 0 35px;
        background: rgba(0, 0, 0, .25);
        font: 400 1.25rem "Roboto", sans-serif;
        color: #ffffff;
    }

    .top-content p {
        color: white;
        font: 65px "Ubuntu Light";
        text-align: center;
        padding-top: 10px;
    }

    .login-wrapper h1 {
        font: 200 2.5rem/40px "Roboto", sans-serif;
        color: #ffffff;
    }

    .login-wrapper {
        display: block;
        position: absolute;
        width: 400px;
        height: 400px;
        padding: 40px;
        background: rgba(0, 16, 3, 0.8);
        border-radius: 10px;
    }

    .login-wrapper p {
        font: 400 0.9rem "Roboto", sans-serif;
        color: #fdfff1;
        margin-bottom: 40px;
        margin-top: 15px;
    }

    a {
        font-size: 20px;
        color: #0038ff;
    }

    .input:focus {
        outline: none;
        box-shadow: 0px 0px 2px #0066ff;
    }
</style>