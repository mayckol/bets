<template>
    <!-- Footer -->
    <footer class="page-footer font-small bg-custom" style="padding-top: 30px">

        <!-- Footer Links -->
        <div class="container-fluid text-center text-md-left">

            <!-- Grid row -->
            <div class="row">

                <!-- Grid column -->
                <div class="col-md-6 mt-md-0 mt-3">

                    <!-- Content -->
                    <h3 class="text-uppercase">Faça parte !</h3>
                    <img src="../statics/img/login/logo5.png" class="img-fluid">

                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none pb-3">

                <!-- Grid column -->

                <q-list padding style="margin-right: 15%">
                    <q-item-label header>Campeonato Brasileiro</q-item-label>
                    <q-item clickable tag="a" href="/">
                        <q-item-section class="text-left">
                            <q-item-label>Classificação</q-item-label>
                            <q-item-label style="color: white" caption>Classificação</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" href="/">
                        <q-item-section class="text-left">
                            <q-item-label>Jogos da rodada</q-item-label>
                            <q-item-label style="color: white" caption>Jogos da rodada</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" href="/">
                        <q-item-section class="text-left">
                            <q-item-label>Artilheiros</q-item-label>
                            <q-item-label style="color: white" caption>Artilheiros</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" href="/">
                        <q-item-section class="text-left">
                            <q-item-label>Notícias</q-item-label>
                            <q-item-label style="color: white" caption>Notícias</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
                <q-list padding style="margin-right: 15%">
                    <q-item-label header>Parceiros</q-item-label>
                    <q-item clickable tag="a" href="/https://aluno.una.br/SOL/aluno/index.php/index/seguranca/dev/instituicao/3">
                        <q-item-section class="text-left">
                            <q-item-label>UNA</q-item-label>
                            <q-item-label style="color: white" caption>UNA</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" href="https://www.w3schools.com/">
                        <q-item-section class="text-left">
                            <q-item-label>W3Schools</q-item-label>
                            <q-item-label style="color: white" caption>W3Schools</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" href="https://laravel.com/">
                        <q-item-section class="text-left">
                            <q-item-label>Laravel</q-item-label>
                            <q-item-label style="color: white" caption>Laravel</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" href="https://aluno.una.br/SOL/aluno/index.php/index/seguranca/dev/instituicao/3">
                        <q-item-section class="text-left">
                            <q-item-label>Contato</q-item-label>
                            <q-item-label style="color: white" caption>Contato</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>

                <!-- Grid column -->

            </div>
            <!-- Grid row -->

        </div>
        <!-- Footer Links -->

        <!-- Copyright -->
        <div class="footer-copyright text-center" style="padding-top: 30px">© 2019 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> betinfoot.com</a>
        </div>
        <!-- Copyright -->

    </footer>
    <!-- Footer -->
</template>

<script>
    export default {
        name: "MyFooter"
    }
</script>

<style scoped>

    h5 {
        color: #ffffff;
    }

    .page-footer {
        border-top: 1px solid white;
    }

    .list-unstyled li a {
        color: #dfefff;
    }

    .bg-custom {
        background-color: #001003;
    }

    .footer-copyright {
        color: white;
    }

    .img-fluid {
        max-width: 100%;
        width: max-content;
        height: max-content;
        margin-right: 5px;
    }

</style>
