<template>
    <q-page padding class="text-center bg-adm-home container">
        hello {{user}}
    </q-page>
</template>

<script>
    import Chart from '../../components/Chart.vue'

    export default {
        name: 'HomeUser',
        components: {
            Chart
        },
        computed: {
            user() {
                return this.$store.state.auth.user;
            }
        },
    }
</script>

