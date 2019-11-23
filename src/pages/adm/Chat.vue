<template>
    <div class="q-pa-md row justify-center">
        <div class="col-lg-4" style="border-radius: 10px">
            <q-scroll-area
                    id="scroll-chat"
                    style="width: 400px;
                    height: 400px;
                    scroll-padding-top: 400px;
                    color: black !important;
                    max-height: 400px;
                    border: 1px solid black;
                    padding: 10px 10px 10px 10px;
                    margin-top: 50px">
                <q-chat-message
                        text-color="black"
                        v-for="item in msg"
                        :key="item.id"
                        :name="item.requester_id === 1 ? 'user' : 'me'"
                        :text="[item.msg]"
                        :sent="item.requester_id === 1 ? true : false"
                />
            </q-scroll-area>
            <div class="row border-r-b-l bg-info" style="max-width: 400px">
                <form ref="chatAdm">
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
        name: "Chat",
        mounted() {
            this.$store.dispatch("auth/retrieveUser").then(res => {
                console.log(res.data)
                this.setMessages(res.data)
            })
            var container = this.$el.querySelector("#scroll-chat");
            console.log(container.scrollHeight)
            container.scrollTop = container.scrollHeight;
        },
        data() {
            return {
                // msg: '',
                inputText: ['olá'],
                newMsg: '',
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
            },

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