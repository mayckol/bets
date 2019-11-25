<template>
    <q-page padding class="text-center bg-adm-home text-dar container">
        <div class="row justify-center">
            <div class="col-sm-12 text-center">
                <p class="p-head">Lista de usuarios e permissões</p>
            </div>
            <div class="col-sm-12 text-center form-control">
                <label class="p-head" for="users">Usuários</label><br>
                <select v-model="userSelected" id="users" required>
                    <option style="font-size: 20px" v-for="user in users"
                            :value="{ id: user.id, permission: user.permission, name: user.name }">
                        {{ user.name }}
                    </option>
                </select>
            </div>
            <div class="q-pa-md q-mt-xl row items-start q-gutter-md" v-if="userSelected">
                <q-card class="my-card" style="min-width: 400px; min-height: 200px">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6">Usuario: {{ userSelected.name }}</div>
                        <div class="text-subtitle2">Permissão Atual: {{ userSelected.permission }}</div>
                    </q-card-section>

                    <q-separator/>

                    <q-card-actions align="right">
                        <form @submit="checkFormPermission" @submit.stop.prevent="updatePermission">
                            <q-input v-model="permission" type="number" class="qpr-md"></q-input>
                            <q-btn glossy
                                   type="submit"
                                   class="q-mt-lg"
                                   color="green">Nova permissão
                            </q-btn>
                        </form>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>

    import {mapState, mapActions} from 'vuex'
    import { axiosInstance } from 'boot/axios'

    export default {

        name: "Permissions",
        data() {
            return {
                userSelected: '',
                permission: null,
            }
        },
        computed: {

            ...mapActions('auth', ['getUsers']),
            ...mapState('auth', ['users'])

        },
        mounted() {
            this.getUsers
        },
        methods: {
            checkFormPermission(e) {
                console.log(this.permission)
                if (this.permission == 1 || this.permission == 4 || this.permission == 7) {
                    return true
                }
                alert('Permissão inválida')
                e.preventDefault();
            },
            updatePermission() {
                return new Promise((resolve, reject) => {
                    axiosInstance.post('/update-permission', {
                        userId: this.userSelected.id,
                        userPermission: this.permission
                    })
                        .then(response => {
                            console.log(response)
                            if (response.status === 200){
                                alert('Permissão atualizada com sucesso!')
                                this.$router.push({name: 'dashboard-adm'})
                            } else {
                                alert('Não foi possível realizar o cadastro!')
                            }
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
            }
        }
    }
</script>

<style>

    .p-head {
        padding-top: 30px;
        font-size: 30px;
    }

</style>