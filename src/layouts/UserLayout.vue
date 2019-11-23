<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar :class="'text-white '+ topBar">
                <q-btn
                        flat
                        dense
                        round
                        @click="leftDrawerOpen = !leftDrawerOpen"
                        icon="menu"
                        aria-label="Menu"
                />

                <q-toolbar-title>
                    Olá {{ user.name }}
                </q-toolbar-title>

                <div>Bet In Foot</div>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="leftDrawerOpen"
                show-if-above
                bordered
                :content-class="leftBar"
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
                <q-item clickable v-ripple to="/chat-user" exact>
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

        <q-page-container :class="mainBg">
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
        },
        computed: {
            user() {
                return this.$store.state.auth.user
            },
            topBar() {
                if (this.user.team_id) {
                    return this.user.permission === 4 && this.user.team_id !== null ? `bg-top-bar-team-${this.user.team_id}` : 'bg-top-bar-adm'
                }else {
                    return 'bg-top-bar-adm'
                }
            },
            mainBg() {
                if (this.user.team_id) {
                    return this.user.permission === 4 ? `layout-team-${this.user.team_id}` : ''
                }else {
                    return ''
                }
            },
            leftBar() {
                if (this.user.team_id) {
                    return this.user.permission === 4 ? `bg-left-bar-team-${this.user.team_id}` : 'bg-left-bar-adm'
                } else {
                    return 'bg-left-bar-adm'
                }
            },

        }
    }
</script>
