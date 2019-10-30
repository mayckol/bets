<template>
    <q-page class="text-center bg-adm-home row container">
        <div class="col-lg-12 col-sm-12">
            <h5>Acompanhe estatísticas sobre a plataforma</h5>
        </div>
        <div class="col-lg-12 col-sm-12">
            <chart></chart>
        </div>
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

