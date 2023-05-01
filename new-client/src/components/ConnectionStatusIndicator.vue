<script setup lang="ts">
import { useStatusStore } from '@/stores/status';

const statusStore = useStatusStore();
</script>

<template>
    <!-- Status Indicator -->
    <div class="chat_status">Status: <span>{{ statusStore.status.connected }}</span></div>
</template>

<style scoped lang="less">
.chat_status {
    background-color: #1d1d38;
    border-top: 1px solid #1d1d38;
    padding: 10px;
    color: #EBEBEB;
    font-size: 0.9vw;
    text-align: center;
    margin-top: 0;
}
</style>