<template>
    <q-page padding class="container text-center">
        <div v-if="!user.team_id && user.permission === 4" class="justify-center">

            <div class="row justify-center">
                <div class="col-sm-6 text-center bg-blue-grey-12">
                    <h1 style="color: black">Escolha seu time do coração</h1>{{user.team_id}}
                </div>
            </div>
            <my-select :teams="this.teams"></my-select>
        </div>
        <div class="row" v-else>
            <div class="q-mt-lg-xl col-sm-10" v-if="showBtn">
                <iframe v-if="showIframe" width="1200" height="800"
                        src="https://www.cbf.com.br/futebol-brasileiro"></iframe>
            </div>
            <div class="col-sm-9 text-right">
                <q-btn
                label="Fechar"
                color="white"
                text-color="black"
                @click="showBtn = !showBtn"
                />
            </div>
        </div>
    </q-page>
</template>

<script>
    import Chart from '../../components/Chart.vue'
    import MySelect from '../../components/MySelect.vue'
    import {mapState, mapActions} from 'vuex'
    import {Loading} from 'quasar'

    export default {
        name: 'HomeUser',
        data() {
            return {
                showIframe: false,
                selectedTeam: '',
                showBtn: true
            }
        },
        components: {
            Chart,
            MySelect
        },
        mounted() {
            Loading.show()
            this.$nextTick(function () {
                this.showIframe = true
                Loading.hide()
            })
        },
        created(){
            this.retrieveUser()
        },
        methods: {
            ...mapActions('auth',[
                'retrieveUser'
            ])
        },
        computed: {
            user() {
                return this.$store.state.auth.user;
            },

            ...mapState(
                'team', ['teams']
            )
            // ...mapActions(
            //     'news', ['lastNews']
            // )
        },
    }
</script>

