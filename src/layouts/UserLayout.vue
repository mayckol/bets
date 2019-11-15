<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar class="text-white bg-top-bar-adm">
                <q-btn
                        flat
                        dense
                        round
                        @click="leftDrawerOpen = !leftDrawerOpen"
                        icon="menu"
                        aria-label="Menu"
                />

                <q-toolbar-title>
                    Painel do Usuario
                </q-toolbar-title>

                <div>Bet In Foot</div>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="leftDrawerOpen"
                show-if-above
                bordered
                content-class="bg-left-bar-adm"
        >
            <q-list>
                <q-item-label header>Ações</q-item-label>
                <q-item clickable v-ripple to="/dashboard" exact>
                    <q-item-section avatar>
                        <q-icon name="home"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Home</q-item-label>
                        <q-item-label class="font-white" caption>Início</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/matches" exact>
                    <q-item-section avatar>
                        <q-icon name="sports_soccer"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Lista de jogos da rodada</q-item-label>
                        <q-item-label class="font-white" caption>Listar jogos</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/bets" exact>
                    <q-item-section avatar>
                        <q-icon name="money"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Apostar</q-item-label>
                        <q-item-label class="font-white" caption>Apostas</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/chat" exact>
                    <q-item-section avatar>
                        <q-icon name="chat"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Chat Online</q-item-label>
                        <q-item-label class="font-white" caption>Chat</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple @click="logout" exact>
                    <q-item-section avatar>
                        <q-icon name="exit_to_app"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Logout</q-item-label>
                        <q-item-label class="font-white" caption>Sair</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        name: 'UserLayout',

        data() {
            return {
                leftDrawerOpen: false
            }
        },
        methods: {
            async logout() {
                await this.$store.dispatch("auth/destroyToken").then(response => {
                    this.$router.push({name: "login"});
                });
            }
        }
    }
</script>
