<template>
    <div class="q-pa-md row justify-center" style="min-width: 100%; min-height: 1080px">
        <div class="col-sm-4" style="border-radius: 10px">
            <div class="col-sm-12">
                <q-scroll-area
                        style="width: 100%;
                        border-radius: 10px;
                    color: black !important;
                    background-color: white !important;
                    height: 400px;
                    max-height: 400px;
                    border: 1px solid black;
                    padding: 10px 10px 10px 10px;
                    margin-top: 50px">
                    <q-chat-message
                            text-color="black"
                            v-for="item in msg"
                            :key="item.id"
                            :name="item.requester_id === 2 ? 'adm' : 'me'"
                            :text="[item.msg]"
                            :sent="item.requester_id === 2 ? true : false"
                    />
                </q-scroll-area>
            </div>
            <div class="col-sm-12 bg-green-4" style="border-radius: 10px">
                <!--            <div class="row border-r-b-l bg-info" style="max-width: 400px">-->
                <form>
                    <div class="col-12 q-pa-lg">
                        <q-input type="text" style="max-width: 100%" v-model="newMsg"
                                 label="Digite uma mensagem"></q-input>
                    </div>
                    <div class="col-12 text-right q-pa-lg">
                        <q-btn
                                class="text-right q-mt-lg"
                                type="submit"
                                rounded
                                color="primary"
                                size="md"
                                label="Enviar"
                                @click.prevent.stop="storeMessage({msg: newMsg, recipient_id: recipientId, requester_id: user.id }), newMsg = ''"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapActions, mapState} from 'vuex'

    export default {
        name: "ChatUser",
        mounted() {
            this.$store.dispatch("auth/retrieveUser").then(res => {
                console.log(res.data)
                this.setMessages(res.data)
            })
        },
        data() {
            return {
                // msg: '',
                inputText: ['olá'],
                newMsg: '',
                mmm1: [1, 2, 3]
            }
        },
        methods: {

            ...mapActions(
                'chat', ['setMessages', 'storeMessage']
            ),
            startInterval: function () {
                let self0 = this
                setTimeout(function () {
                    let self = self0
                    self.setMessages(self.user.id)
                }, 5000)
            }
        },
        computed: {
            ...mapState(
                'chat', ['msg']
            ),
            user() {
                return this.$store.state.auth.user;
            },
            recipientId() {
                return this.user.id === 1 ? 2 : 1
            },
        },
        updated() {
            let vm = this
            this.startInterval()
        }
    }
</script>

<style scoped>

</style>