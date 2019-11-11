<template>
    <q-page padding class="text-center bg-adm-home container q-pt-xl">
        <form>
            <bet v-for="item in bet" :bet="item" :key="item.id"></bet>
            <div class="row text-right">
                <div class="col-sm-12 text-right">
                    <q-btn color="green" style="margin-right: 20%" class="q-mt-lg"
                           @click.stop.prevent="storeBet({bet: bet, user: user.id})" type="submit">Apostar
                    </q-btn>
                </div>
            </div>
        </form>
    </q-page>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import Bet from "../../components/Bet"
    import {Notify} from 'quasar'

    export default {
        name: "Bets",
        data() {
            return {}
        },
        components: {
            Bet,
        },
        mounted() {
            this.setBet(true)
            this.retrieveUser()
        },
        computed: {
            ...mapState(
                'bet', ['bet'],
            ),
            ...mapState(
                'auth', ['user'],
            ),

        },
        methods: {
            ...mapActions(
                'bet', ['setBet', 'storeBet'],
            ),
            ...mapActions(
                'auth', ['auth', 'retrieveUser'],
            ),
        }
    }
</script>

<style scoped>

</style>