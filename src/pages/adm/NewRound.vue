<template>
    <div class="row justify-center text-black">
        <div class="col-sm-12 text-center q-pt-xl">
            <q-date
                    v-model="date1"
                    type="date"
                    mask="##/##/####"
                    class="q-pa-sm"
            />
            <div class="row justify-center text-black">
                <div class="col-sm-1">
                    <p class="q-pt-md">Jogo 1</p>
                </div>
                <div class="col-sm-3 border-all">
                    <!--                'sending_team_id' => $match['teamA']['id'],
                'visiting_team_id' => $match['teamB']['id'],
                'stadium' => $match['stadium'],
                'schedule' => $match['schedule'],
                'round_id' => $match['round_id'],-->
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
                <div class="col-sm-4 border-all">
                    <div class="row">
                        <div class="col-sm-4 q-pa-sm">
                            <q-input class="q-pa-sm" label="Estádio"></q-input>
                        </div>
                        <div class="col-sm-4 q-pa-sm">
                            <q-date
                                    v-model="date1"
                                    type="date"
                                    mask="##/##/####"
                                    class="q-pa-sm"
                            />
                        </div>
                        <div class="col-sm-4 q-pa-sm">
                            <q-input class="q-pa-sm" label="Rodada"></q-input>
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
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "NewRound",
        computed: {
            ...mapState('team', ['teams'])
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
                date1: '',
            }
        }
    }
</script>

<style>
    body {
        color: black;
    }
</style>