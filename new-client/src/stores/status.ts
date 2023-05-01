import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStatusStore = defineStore('status', () => {
    const status = ref({
        connected: false,
    });

    function updateConnectedStatus(connected: boolean) {
        status.value.connected = connected;
    }

    return { status, updateConnectedStatus }
})
