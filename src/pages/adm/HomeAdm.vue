<template>
    <q-page padding class="text-center bg-adm-home container">
        <div class="q-gutter-md row justify-center" style="font-size: 4em">
            <q-spinner-gears color="cyan" style="margin-top: 30px"/>
            <h1 v-if="this.$q.platform.is.desktop">Acompanhe estatísticas sobre a plataforma</h1>
            <h3 v-else-if="this.$q.platform.is.mobile">Acompanhe estatísticas sobre a plataforma</h3>
        </div>
        <chart></chart>
        <div class="q-gutter-md row justify-center q-pa-lg">
            <div class="col-sm-3 q-pa-lg">
                <q-card class="my-card">
                    <q-card-section class="bg-teal text-white">
                        <div class="text-h6">Total de usuários</div>
                    </q-card-section>

                    <q-card-actions vertical align="center">
                        <q-item class="text-black">{{ statistics.users }}</q-item>
                    </q-card-actions>
                </q-card>
            </div>
            <div class="col-sm-3 q-pa-lg">
                <q-card class="my-card">
                    <q-card-section class="bg-blue text-white">
                        <div class="text-h6">Total de usuários PRO</div>
                    </q-card-section>

                    <q-card-actions vertical align="center">
                        <q-item class="text-black">{{ statistics.users_pro }}</q-item>
                    </q-card-actions>
                </q-card>
            </div>
            <div class="col-sm-3 q-pa-lg">
                <q-card class="my-card">
                    <q-card-section class="bg-light-blue text-white">
                        <div class="text-h6">Total de usuários FREE</div>
                    </q-card-section>

                    <q-card-actions vertical align="center">
                        <q-item class="text-black">{{ statistics.users_free }}</q-item>
                    </q-card-actions>
                </q-card>
            </div>
            <div class="col-sm-3 q-pa-lg">
                <q-card class="my-card">
                    <q-card-section class="bg-green-10 text-white">
                        <div class="text-h6">Total de apostas</div>
                    </q-card-section>

                    <q-card-actions vertical align="center">
                        <q-item class="text-black">{{ statistics.bets }}</q-item>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
    import Chart from '../../components/Chart.vue'
    import {mapActions} from 'vuex'
    import {mapState} from 'vuex'

    export default {
        name: 'HomeAdm',
        components: {
            Chart
        },
        created() {
            this.setStatistics(this.$store.getters['auth/tokenUser'])
        },
        computed: {
            ...mapState('adm', ['statistics'])
        },
        methods: {
            ...mapActions('adm', ['setStatistics'])
        }
    }
</script>

