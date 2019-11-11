<template>
    <q-page padding class="text-center bg-adm-home container q-pt-xl">
        <match v-for="item in this.matches" :match="item" :key="item.id"></match>
    </q-page>
</template>

<script>
    import Match from "../../components/Match"
    import {mapActions, mapState, mapGetters} from 'vuex'

    export default {
        name: "Matches",
        data() {
            return {
            }
        },
        components: {
            Match
        },
        mounted() {
            this.setMatches()
        },
        computed: {
            ...mapState(
                'match', ['matches']
            ),
            ...mapGetters(
                'match', ['getMatches']
            )
        },
        methods: {
            ...mapActions(
                'match', ['setMatches']
            )
        }

    }
</script>

<style scoped>

</style>