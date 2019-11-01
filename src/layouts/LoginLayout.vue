<template>
    <q-layout view="hHh Lpr lFf">
        <q-header elevated>
            <q-toolbar class="text-white bg-top-bar-login">
                <q-btn
                        flat
                        dense
                        round
                        @click="leftDrawerOpen = !leftDrawerOpen"
                        icon="menu"
                        aria-label="Menu"
                />
                <q-toolbar-title id="home" class="white-link" v-if="this.$q.platform.is.desktop">
                    <a v-if="!leftDrawerOpen" class="q-pl-sm" href="/"> Bet In Foot </a>
                    <a v-if="!leftDrawerOpen" class="q-pl-xl" href="/login#who"> O que somos</a>
                    <a v-if="!leftDrawerOpen" class="q-pl-xl" href="/login#how"> Como apostar</a>
                </q-toolbar-title>
                <div>
                    <q-icon size="lg" left name="sports_soccer"/>
                </div>
            </q-toolbar>
        </q-header>
        <q-drawer
                v-if="leftDrawerOpen"
                v-model="leftDrawerOpen"
                show-if-above
                bordered
                content-class="bg-grey-2"
                class="text-dar"
        >
            <q-list>
                <q-item-label header>Links</q-item-label>
                <q-item clickable tag="a" href="/login#home">
                    <q-item-section avatar>
                        <q-icon name="home"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Home</q-item-label>
                        <q-item-label caption>Início</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="a" href="/login#who">
                    <q-item-section avatar>
                        <q-icon name="business"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>O que somos ?</q-item-label>
                        <q-item-label caption>Conheça um pouco da nossa história</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="a" href="/login#how">
                    <q-item-section avatar>
                        <q-icon name="attach_money"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Como apostar?</q-item-label>
                        <q-item-label caption>Entendar melhor as apostas</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>
        <q-page-container>
            <router-view/>
        </q-page-container>
        <q-footer style="position: absolute" bordered elevated reveal>
            <my-footer></my-footer>
        </q-footer>
        <!--        <div class="row">-->
        <!--            <my-footer></my-footer>-->
        <!--        </div>-->
    </q-layout>
</template>

<script>
    import MyFooter from "../components/MyFooter"

    export default {
        name: 'LoginLayout',

        data() {
            return {
                leftDrawerOpen: false,
                title: 'Bet In Foot',
            }
        },
        components: {
            MyFooter
        },

    }
</script>
<style>

    .bg-top-bar-login {
        background-color: #002b04;
    }

</style>