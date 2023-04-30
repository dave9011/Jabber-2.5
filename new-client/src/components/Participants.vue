<script setup lang="ts">
import { useChatsStore } from '@/stores/chat';

const chatsStore = useChatsStore();
</script>

<template>
    <!-- Connected Users -->
    <div class="connected-users-hold">
        <h3 class="title">Participants</h3>
        <div class="connected-users">
            <div class="user-info" v-for="user in chatsStore.participants">
                <!-- <img class="avatar" :src="getUserAvatar(user)"> -->
                <span class="name">{{ user.username }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.connected-users-hold {
    background-color: #252556;
    flex: 2;
}

.connected-users-hold .title {
    display: flex;
}

.connected-users {
    display: flex;
    flex-wrap: wrap;
}

.connected-users .user-info {
    font-size: 0.8vw;
    padding: 10px;
    text-align: center;
    width: 20%;
}

.connected-users .user-info .avatar {
    margin-bottom: 3px;
}

.connected-users .user-info .name {
    color: #8f8fca;
}
</style>