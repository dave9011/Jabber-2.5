<script setup lang="ts">
import ChatInputBar from "@/components/ChatInputBar.vue";
import ChatInbox from "@/components/ChatInbox.vue";
import Status from "@/components/ConnectionStatusIndicator.vue";
import Participants from "@/components/Participants.vue";
</script>

<template>
    <div class="full-vertical-height">
        <div class="flex_wrapper full-vertical-height">
            <div class="left-content">
                <ChatInbox />

                <ChatInputBar />
            </div>
            <div class="right-content">
                <div class="flex_wrapper inner">
                    <Participants />

                    <Status />
                </div>
            </div>
        </div>
    </div>
</template>