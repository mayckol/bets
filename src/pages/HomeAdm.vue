<template>
    <q-page padding class="text-center bg-adm-home container">
        <div class="q-gutter-md row justify-center" style="font-size: 4em">
            <q-spinner-gears color="cyan"  style="margin-top: 30px"/>
            <h1 v-if="this.$q.platform.is.desktop">Acompanhe estatísticas sobre a plataforma</h1>
            <h3 v-else-if="this.$q.platform.is.mobile">Acompanhe estatísticas sobre a plataforma</h3>
        </div>
        <chart></chart>
    </q-page>
</template>

<script>
    import Chart from '../components/Chart.vue'

    export default {
        name: 'HomeAdm',
        components: {
            Chart
        }
    }
</script>

