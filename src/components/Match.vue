<template>
    <div class="row text-center row-hover text-black text-uppercase q-pt-md"
         style="border: solid 1px black; margin-left: 20%; margin-right: 20%; padding-bottom: 0">
        <div class="col-sm-5 col-hover">
            <p>
                {{ teams[(match.sending_team_id - 2)].name.substring(0, 3) }}
                <img
                        :src="`../statics/Times/${teams[(match.sending_team_id - 2)].id}.png`"
                        style="max-height: 70px; max-width: 70px" class="img-fluid text-lowercase">
            </p>
        </div>
        <div class="col-sm-2 col-hover">
                <p>{{ match.stadium }} <br/>
                    {{ match.schedule.substring(8, 10)}}-{{ match.schedule.substring(5, 7)}}-{{ match.schedule.substring(0, 4)}}
                    <br/>
                X</p>
        </div>
        <div class="col-sm-5 col-hover">
            <p>
                <img
                        :src="`../statics/Times/${teams[(match.visiting_team_id - 2)].id}.png`"
                        style="max-height: 70px; max-width: 70px" class="img-fluid">
                {{ teams[(match.visiting_team_id - 2)].name.substring(0, 3) }}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Match",
        mounted() {

        },
        data() {
            return {

            }
        },
        props: [
            'match'
        ],
        computed:{
            ...mapState(
                'match', ['teams']
            ),
        }
    }
</script>

<style scoped>

</style>