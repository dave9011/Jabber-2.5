<script setup lang="ts">
interface Message {
    message: string;
    name: string;
    time: string;
}

const sortedMessages: Message[] = [
    { message: 'test1', name: 'Dave', time: 'today' },
    { message: 'test2', name: 'Ash', time: 'today' }
];

function isOwnMessage(msg: Message) {
    return msg.name === 'Dave';
}
</script>

<template>
    <div>
        <div class="chat-messages-hold">
            <div class="chat_message" v-for="message in sortedMessages"
                v-bind:class="{ 'own-message': isOwnMessage(message) }">
                <div class="message">
                    {{ message.message }}
                </div>
                <div class="message-info">
                    {{ message.name }} {{ message.time }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.chat-messages-hold {
    /* TODO: figure out how to properly reference this URL */
    background: url('../assets/sports.png');
    display: flex;
    flex-direction: column;
    font-size: 1.1vw;
    padding: 30px 30px 40px;
    overflow-y: scroll;
    width: 100%;
}

.chat_message {
    margin-bottom: 15px;
    max-width: 80%;
    word-break: break-all;
}

.chat_message:last-of-type {
    margin-bottom: 0;
}

.chat_message>img {
    max-width: 50%;
    max-height: 250px;
    margin-top: 6px;
}

.chat_message.own-message {
    align-self: flex-end;
    color: white;
}

.chat_message.own-message .message {
    background: #5ba4ff;
}

.chat_message.own-message .message span {
    color: #211b1b;
}

.chat_message .message-info {
    color: #acacac;
    font-size: 11px;
    padding: 3px 0 0 2px;
}

.chat_message.own-message .message-info {
    padding: 3px 2px 0 0;
    text-align: right;
}

.message {
    color: #f6f6f6;
    background: #f35858;
    border-radius: 6px;
    display: inline-block;
    font-size: 13px;
    padding: 10px 20px;
}
</style>