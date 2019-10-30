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
                <q-item clickable v-ripple to="/" exact>
                    <q-item-section avatar>
                        <q-icon name="sports_soccer"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Cadastrar nova rodada</q-item-label>
                        <q-item-label class="font-white" caption>Escolha os jogos da rodada</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/permissions" exact>
                    <q-item-section avatar>
                        <q-icon name="vpn_key"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Permissão de Usuários</q-item-label>
                        <q-item-label class="font-white" caption>Habilitar usuário PRO</q-item-label>
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
                <q-item clickable v-ripple to="/logout" exact>
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
        }
    }
</script>
