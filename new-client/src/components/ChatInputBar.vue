<script setup lang="ts">
import { useNewMessageStore } from '@/stores/new-message';

const newMessageStore = useNewMessageStore();

const isOtherUserTyping = false;
const typingIndicator = 'Straw Hat Pirates';

function submitMessage() {
    console.log(newMessageStore.message);
}
</script>

<template>
    <div>
        <!-- Typing Indicator -->
        <div class="typing-indicator" v-if="isOtherUserTyping">
            {{ typingIndicator }} is typing ...
        </div>

        <!-- New Message -->
        <input class="chat_area" v-focus placeholder="Type your message here" v-model="newMessageStore.message"
            v-on:keyup="submitMessage" />
    </div>
</template>

<style scoped lang="less">
.chat_area {
    background: #f4f4f4;
    border: none;
    border-top: 1px solid #dcdcdc;
    color: #1d1d38;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 0.9vw;
    padding: 10px 20px;
}

.typing-indicator {
    background-color: #7070de;
    bottom: 0;
    color: #FFF;
    font-size: 0.7vw;
    left: 0;
    padding: 8px 20px;
    width: 100%;
}
</style>