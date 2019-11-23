<template>
    <div id="q-app" class="row justify-center" style="color: black !important;">
        <div class="col-sm-6 border-all bg-green-1">
            <div class="col-sm-8 q-pa-xl">
                <q-img
                        v-if="model !== 1 && model !== undefined && model"
                        style="height: 200px; max-width: 200px"
                        :src="`../statics/Times/${ model }.png`"
                />
            </div>
            <div class="q-pa-xl q-ma-xl col-sm-6 text-center">
                <q-select
                        filled
                        v-model="model"
                        @new-value="createValue"
                        @filter="filterFn"
                        :options="options"
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
            <div class="col-sm-8" style="margin-bottom: 30px">
                <q-btn @click="setFavoriteTeam(model)" color="green" size="lg">Enviar</q-btn>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                model: null,
                filterOptions: this.teams,
                options: this.teams
            }
        },
        props: [
            'teams'
        ],
        computed: {},
        methods: {
            opts(teams) {
                let teamsF
                teamsF = teams.map((team) => {
                    return team.name
                });

                return teamsF
            },
            ...mapActions(
              'auth', ['setFavoriteTeam']
            ),
            createValue(val, done) {
                // Calling done(var) when new-value-mode is not set or "add", or done(var, "add") adds "var" content to the model
                // and it resets the input textbox to empty string
                // ----
                // Calling done(var) when new-value-mode is "add-unique", or done(var, "add-unique") adds "var" content to the model
                // only if is not already set
                // and it resets the input textbox to empty string
                // ----
                // Calling done(var) when new-value-mode is "toggle", or done(var, "toggle") toggles the model with "var" content
                // (adds to model if not already in the model, removes from model if already has it)
                // and it resets the input textbox to empty string
                // ----
                // If "var" content is undefined/null, then it doesn't tampers with the model
                // and only resets the input textbox to empty string

                if (val.length > 2) {
                    if (!this.teams.includes(val)) {
                        done(val, 'add-unique')
                    }
                }
            },

            filterFn(val, update) {
                update(() => {
                    if (val === '') {
                        this.filterOptions = this.opts(this.teams)
                    } else {
                        const needle = val.toLowerCase()
                        this.filterOptions = this.opts(this.teams).filter(
                            v => v.toLowerCase().indexOf(needle) > -1
                        )
                    }
                })
            }
        }
    }
</script>
<style>
    body {
        color: black;
    }
</style>