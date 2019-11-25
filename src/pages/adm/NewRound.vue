<template>
    <div class="row justify-center text-black">
        <div class="col-sm-12 text-center q-pt-xl">
            <div class="row justify-center text-black q-pa-md">
                <form>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 1</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id1"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium1" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date1" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id1"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 2</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id2"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium2" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date2" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id2"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 3</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id3"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium3" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date3" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id3"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 4</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id4"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium4" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date4" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id4"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 5</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id5"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium5" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date5" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id5"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 6</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id6"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium6" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date6" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id6"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 7</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id7"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium7" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date7" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id7"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 8</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id8"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium8" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date8" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id8"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 9</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id9"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium9" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date9" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id9"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-1">
                        <p class="q-pt-md">Jogo 10</p>
                    </div>
                    <div class="col-sm-3 border-all">

                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="sending_team_id10"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-5 border-all">
                        <div class="row">
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="stadium10" label="Estádio"></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input type="date" v-model="date10" label=""></q-input>
                            </div>
                            <div class="col-sm-4 q-pa-sm">
                                <q-input class="q-pa-sm" v-model="roundId" label="Rodada"></q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 border-all">
                        <q-select
                                filled
                                class="q-pa-sm"
                                v-model="visiting_team_id10"
                                :options="teams"
                                option-value="id"
                                option-label="name"
                                option-disable="inactive"
                                emit-value
                                map-options
                                color="green"
                                bg-color="bg-blue-grey-12"
                                style="width: 100%; font-size: 20px"
                        ></q-select>
                    </div>
                    <div class="col-sm-12 text-right q-mb-lg-xl">
                        <q-btn @click.prevent.stop="setRound" color="blue" class="q-mt-md" label="Enviar"></q-btn>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import { axiosInstance } from 'boot/axios'

    export default {
        name: "NewRound",
        computed: {
            ...mapState('team', ['teams'])
        },
        methods: {
            setRound() {
                const data = [
                    {
                        teamA: this.sending_team_id1,
                        teamB: this.visiting_team_id1,
                        schedule: this.date1,
                        round_id: this.roundId,
                        stadium: this.stadium1,
                    },
                    {
                        teamA: this.sending_team_id2,
                        teamB: this.visiting_team_id2,
                        schedule: this.date2,
                        round_id: this.roundId,
                        stadium: this.stadium2,
                    },
                    {
                        teamA: this.sending_team_id3,
                        teamB: this.visiting_team_id3,
                        schedule: this.date3,
                        round_id: this.roundId,
                        stadium: this.stadium3,
                    },
                    {
                        teamA: this.sending_team_id4,
                        teamB: this.visiting_team_id4,
                        schedule: this.date4,
                        round_id: this.roundId,
                        stadium: this.stadium4,
                    },
                    {
                        teamA: this.sending_team_id5,
                        teamB: this.visiting_team_id5,
                        schedule: this.date5,
                        round_id: this.roundId,
                        stadium: this.stadium5,
                    },
                    {
                        teamA: this.sending_team_id6,
                        teamB: this.visiting_team_id6,
                        schedule: this.date6,
                        round_id: this.roundId,
                        stadium: this.stadium6,
                    },
                    {
                        teamA: this.sending_team_id7,
                        teamB: this.visiting_team_id7,
                        schedule: this.date7,
                        round_id: this.roundId,
                        stadium: this.stadium7,
                    },
                    {
                        teamA: this.sending_team_id8,
                        teamB: this.visiting_team_id8,
                        schedule: this.date8,
                        round_id: this.roundId,
                        stadium: this.stadium8,
                    },
                    {
                        teamA: this.sending_team_id9,
                        teamB: this.visiting_team_id9,
                        schedule: this.date9,
                        round_id: this.roundId,
                        stadium: this.stadium9,
                    },
                    {
                        teamA: this.sending_team_id10,
                        teamB: this.visiting_team_id10,
                        schedule: this.date10,
                        round_id: this.roundId,
                        stadium: this.stadium10,
                    },
                ]

                return new Promise((resolve, reject) => {
                    axiosInstance.post('/set-matches', {
                        matches: data,
                    })
                        .then(response => {
                            console.log(response)
                            if (response.status === 200){
                                alert('Rodada cadastrada')
                                this.$router.push('dashboard-adm')
                            } else {
                                alert('Não foi possível realizar o cadastro!')
                            }
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
            }
        },
        data() {
            return {
                sending_team_id1: '',
                visiting_team_id1: '',
                sending_team_id2: '',
                visiting_team_id2: '',
                sending_team_id3: '',
                visiting_team_id3: '',
                sending_team_id4: '',
                visiting_team_id4: '',
                sending_team_id5: '',
                visiting_team_id5: '',
                sending_team_id6: '',
                visiting_team_id6: '',
                sending_team_id7: '',
                visiting_team_id7: '',
                sending_team_id8: '',
                visiting_team_id8: '',
                sending_team_id9: '',
                visiting_team_id9: '',
                sending_team_id10: '',
                visiting_team_id10: '',
                date1: '',
                date2: '',
                date3: '',
                date4: '',
                date5: '',
                date6: '',
                date7: '',
                date8: '',
                date9: '',
                date10: '',
                stadium1: '',
                stadium2: '',
                stadium3: '',
                stadium4: '',
                stadium5: '',
                stadium6: '',
                stadium7: '',
                stadium8: '',
                stadium9: '',
                stadium10: '',
                roundId: '',
            }
        }
    }
</script>

<style>
    body {
        color: black;
    }
</style>