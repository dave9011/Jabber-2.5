<script setup lang="ts">
import { useChatsStore } from '@/stores/chat';

const chatsStore = useChatsStore();
</script>

<template>
    <!-- Connected Users -->
    <div class="participants-list-container">
        <h3 class="title">Participants</h3>
        <div class="participants-list">
            <div class="user-info" v-for="user in chatsStore.participants">
                <img v-if="user.avatar_url" class="avatar" :src="user.avatar_url">
                <span class="name">{{ user.username }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.participants-list-container {
    background-color: #252556;
    padding: 0.7rem 1rem;
    display: flex;
    flex-direction: column;

    .title {
        display: flex;
        color: white;
    }

    .participants-list {
        display: flex;
        flex-wrap: wrap;

        .user-info {
            align-items: center;
            display: flex;
            flex-direction: column;
            padding: 8px;
            text-align: center;
            width: 20%;

            .avatar {
                margin-bottom: 3px;
                height: 30px;
                width: 30px;
                border-radius: 50%;
            }

            .name {
                color: #8f8fca;
                font-size: 0.5rem;
            }
        }
    }
}
</style>