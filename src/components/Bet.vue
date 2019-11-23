<template>
    <div class="row text-center row-hover text-black text-uppercase q-pt-md"
         style="border: solid 1px black; margin-left: 20%; margin-right: 20%; padding-bottom: 0">
        <div class="col-sm-4 col-hover">
            <div class="row inline">
                <div class="col-sm-4">
                    <p class="q-pt-lg">
                        {{ teams[(bet.sending_team_id - 2)].name.substring(0, 3) }}
                    </p>
                </div>
                <div class="col-sm-4">
                    <img
                            @mouseenter="lastMatches(bet.sending_team_id)"
                            :title="infoTeam"
                            :src="`../statics/Times/${teams[(bet.sending_team_id - 2)].id}.png`"
                            style="max-height: 70px; max-width: 70px" class="img-fluid text-lowercase" alt="">
                </div>
                <div class="col-sm-3">
                    <input type="number" min="0" class="q-ml-lg q-mt-md border-input"
                           :value ='bet.sending_team_goals'
                           style="width: 50px">
                </div>
            </div>
        </div>
        <div class="col-sm-3 col-hover">
            <p>{{ bet.stadium }} <br/> {{ bet.schedule.substring(8, 10)}}-{{ bet.schedule.substring(5, 7)}}-{{
                bet.schedule.substring(0, 4)}} <br>
                X</p>
        </div>
        <div class="col-sm-4 col-hover">
            <div class="row inline">
                <div class="col-sm-3">
                    <input type="number" min="0" class="q-mr-xl q-mt-md border-input"
                           :value ='bet.visiting_team_goals'
                           style="width: 50px">
                </div>
                <div class="col-sm-4">
                    <img
                            @mouseenter="lastMatches(bet.visiting_team_id)"
                            :title="infoTeam"
                            :src="`../statics/Times/${teams[(bet.visiting_team_id - 2)].id}.png`"
                            style="max-height: 70px; max-width: 70px" class="img-fluid">
                </div>
                <div class="col-sm-4">
                    <p class="q-pt-lg q-ml-md">
                        {{ teams[(bet.visiting_team_id - 2)].name.substring(0, 3) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState, mapActions} from 'vuex'

    export default {
        name: "Bet",
        props: [
            'bet'
        ],
        data() {
            return {
                card: true,
            }
        },
        computed: {
            ...mapState(
                'match', ['teams', 'lastMatchesByTeam']
            ),
            infoTeam() {
                if (this.lastMatchesByTeam['sending'] !== undefined)

                    return this.formatTeam((this.lastMatchesByTeam['sending'])[0]['sending_team_id']) + ' ' +
                        this.lastMatchesByTeam['sending'][0]['sending_team_goals'] + ' x ' +
                        this.lastMatchesByTeam['sending'][0]['visiting_team_goals'] + ' ' +
                        this.formatTeam(this.lastMatchesByTeam['sending'][0]['visiting_team_id']) + '\n\n' +
                        this.formatTeam(this.lastMatchesByTeam['sending'][1]['sending_team_id']) + ' ' +
                        this.lastMatchesByTeam['sending'][1]['sending_team_goals'] + ' x ' +
                        this.lastMatchesByTeam['sending'][1]['visiting_team_goals'] + ' ' +
                        this.formatTeam(this.lastMatchesByTeam['sending'][1]['visiting_team_id']) + '\n\n'+
                        this.formatTeam(this.lastMatchesByTeam['visiting'][0]['sending_team_id']) + ' ' +
                        this.lastMatchesByTeam['visiting'][0]['sending_team_goals'] + ' x ' +
                        this.lastMatchesByTeam['visiting'][0]['visiting_team_goals'] + ' ' +
                        this.formatTeam(this.lastMatchesByTeam['visiting'][0]['visiting_team_id']) + '\n\n'
            }
        },
        methods: {
            ...mapActions(
                'match', ['lastMatches']
            ),
            formatTeam(id) {
                switch (id) {
                    case 2:
                        return 'Athletico Paranaense'
                    case 3:
                        return 'Atletico Mineiro'
                    case 4:
                        return 'Avaí'
                    case 5:
                        return 'Bahia'
                    case 6:
                        return 'Botafogo'
                    case 7:
                        return 'Ceará'
                    case 8:
                        return 'Chapecoense'
                    case 9:
                        return 'Corinthians'
                    case 10:
                        return 'Cruzeiro'
                    case 11:
                        return 'Csa'
                    case 12:
                        return 'Flamengo'
                    case 13:
                        return 'Fluminense'
                    case 14:
                        return 'Fortaleza'
                    case 15:
                        return 'Goiás'
                    case 16:
                        return 'Grêmio'
                    case 17:
                        return 'Internacional'
                    case 18:
                        return 'Palmeiras'
                    case 19:
                        return 'Santos'
                    case 20:
                        return 'São Paulo'
                    case 21:
                        return 'Vasco da Gama'
                }
            }
        },
    }
</script>

<style scoped>

</style>