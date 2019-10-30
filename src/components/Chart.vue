<template>
    <div class="q-pa-md">
        <div class="row justify-center">
            <pure-vue-chart
                    class="c-chart"
                    :points=[1,4,5,3,4,10,8,9,7,1,9,15]
                    :show-y-axis="true"
                    :show-x-axis="true"
                    :width="400"
                    :height="200"
                    :show-values="true"
                    :use-month-labels="true"
                    :months="['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']"
            />
            <pure-vue-chart
                    class="c-chart"
                    :points=[1,4,5,3,4,10,8,9,7,1,9,15]
                    :show-y-axis="true"
                    :show-x-axis="true"
                    :width="400"
                    :height="200"
                    :show-values="true"
                    :use-month-labels="true"
                    :months="['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']"
            />
            <pure-vue-chart
                    class="c-chart"
                    :points=[1,4,5,3,4,10,8,9,7,1,9,15]
                    :show-y-axis="true"
                    :show-x-axis="true"
                    :width="400"
                    :height="200"
                    :show-values="true"
                    :use-month-labels="true"
                    :months="['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']"
            />
        </div>
    </div>
</template>

<script>
    import PureVueChart from 'pure-vue-chart'

    export default {
        components: {
            PureVueChart
        }
    }
</script>

<style scoped>

</style>