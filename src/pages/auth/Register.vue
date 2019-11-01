<template>
    <q-page class="flex flex-center main-login img-resp">
        <div class="login-wrapper">
            <form>
                <div class="col-sm-12">
                    <h1 class="mb-5">Cadastre-se</h1>
                </div>
                <div class="col">
                    <h5 class="mb-4">O que está esperando ?</h5>
                </div>
                <div class="col-sm-12 input-group btn-right">
                    <input v-model="name" type="text" class="input" placeholder="nome" required>
                    <input v-model="email" type="email" class="input" placeholder="email" required>
                    <input v-model="birthDate"
                           type="date"
                           placeholder="Data de nascimento"
                           required
                           style="border-radius: 10px; margin-bottom: 15px; padding: 10px 0 10px 10px; border: none; color: white; background-color: #000000"/>
                    <label for="birth-date">Data de nascimento</label>
                    <input id="birth-date" v-model="password" type="password" class="input" placeholder="senha"
                           required>
                    <input v-model="confirmPassword" type="password" class="input" placeholder="confirme sua senha"
                           required>
                    <a href="/login" style="font-size: 20px">Já sou cadastrado</a>
                </div>
                <p style="color: white">
                    Ao clicar em cadastrar,<br/> Você concorda com todas as <a href="#">políticas</a> de uso da
                    plataforma.
                </p>
                <div class="col-sm-12">
                    <div class="form-check">
                        <input v-model="checkboxes" type="checkbox" value="isAdult" class="form-check-input"
                               id="exampleCheck1" required>
                        <label class="form-check-label" for="exampleCheck1">Declaro ser maior de 18 anos.</label>
                    </div>
                </div>
                <div class="col-sm-12 input-group btn-right">
                        <span class="text-center float-right">
                           <q-btn
                                   @click.stop.prevent="register"
                                   type="submit"
                                   rounded
                                   color="primary"
                                   size="md"
                                   label="Registrar"
                           />
                        </span>
                </div>
            </form>
        </div>
    </q-page>
</template>
<script>
    export default {
        name: "Register",
        data() {
            return {
                name: '',
                email: '',
                birthDate: '',
                password: '',
                confirmPassword: '',
                checkboxes: [],
                registerSuccess: false,
                componentKey: 0
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .top-content p {
        color: white;
        font: 65px "Ubuntu Light";
        text-align: center;
        padding-top: 0px;
    }

    .login-wrapper {
        display: block;
        padding: 40px;
        background: rgba(0, 16, 3, 0.8);
        opacity: 0.7;
        border-radius: 10px;
        max-width: 600px;
    }

    .login-wrapper h1 {
        font: 200 2.5rem/40px "Roboto", sans-serif;
        color: #ffffff;
    }

    label {
        color: #ffffff;
    }

    .login-wrapper p {
        font: 400 0.9rem "Roboto", sans-serif;
        color: #20ff11;
        margin-bottom: 40px;
        margin-top: 15px;
    }

    .input {
        width: 100%;
        height: 50px;
        border-radius: 25px;
        border: none;
        margin-bottom: 15px;
        padding: 0 35px;
        background: rgb(0, 0, 0);
        font: 400 1.25rem "Roboto", sans-serif;
        color: #ffffff;
    }
    .input:focus {
        outline: none;
        box-shadow: 0px 0px 2px #0066ff;
    }

    h5 {
        color: #ffffff;
        font-size: 14px;
    }

    h1 {
        opacity: 1;
    }

    .button-primary {
        float: right;
        width: auto;
        font: 800 1rem "Roboto", sans-serif;
        margin-top: 15px;
        margin-right: 10%;
        background: rgb(210, 236, 255);
        color: black;
    }

    .btn-right {
        display: block;
    }

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

    a {
        font-size: 20px;
        color: #0038ff;
    }
</style>