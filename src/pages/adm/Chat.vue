<template>
    <div class="q-pa-md row justify-center">
        <div class="col-lg-4" style="border-radius: 10px">
            <q-scroll-area
                    style="width: 400px;
                    height: 400px;
                    max-height: 400px;
                    border: 1px solid black;
                    padding: 10px 10px 10px 10px;
                    margin-top: 50px">
                <q-chat-message
                        name="me"
                        :text="['Você poderia me ajudar com uma dúvida?']"
                        sent
                />
                <q-chat-message
                        name="Jane"
                        :text="inputText"
                />

            </q-scroll-area>
            <div class="row border-r-b-l bg-info" style="max-width: 400px">
                <div class="col-12 q-pa-lg">
                    <q-input type="text" style="max-width: 400px" v-model="msg" label="Digite uma mensagem"></q-input>
                </div>
                <div class="col-12 text-right q-pa-lg">
                    <q-btn
                            class="text-right q-mt-lg"
                            @click.stop.prevent="addMsg"
                            type="submit"
                            rounded
                            color="primary"
                            size="md"
                            label="Enviar"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        data() {
            return {
                msg: '',
                inputText: ['olá']
            }
        },
        methods: {
            addMsg() {
                this.inputText.push(this.msg)
                this.msg = ''
            }
        }
    }
</script>

<style scoped>

</style>