<template>
    <q-page padding class="text-center bg-adm-home container">
        <div class="row">
            <div class="col-sm-12 q-mt-lg-xl">
                <iframe v-if="showIframe" width="1200" height="800"
                        src="https://www.cbf.com.br/futebol-brasileiro"></iframe>
            </div>
        </div>
    </q-page>
</template>

<script>
    import Chart from '../../components/Chart.vue'
    // import { mapActions } from 'vuex'
    import {Loading} from 'quasar'

    export default {
        name: 'HomeUser',
        data() {
            return {
                showIframe: false
            }
        },
        // mounted(){
        //   this.lastNews
        // },
        components: {
            Chart,
        },
        mounted() {
            Loading.show()
            this.$nextTick(function () {
                this.showIframe = true
                Loading.hide()
            })
        },
        computed: {
            user() {
                return this.$store.state.auth.user;
            },
            // ...mapActions(
            //     'news', ['lastNews']
            // )
        },
    }
</script>

