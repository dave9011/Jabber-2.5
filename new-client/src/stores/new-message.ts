import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNewMessageStore = defineStore('newMessage', () => {
    const message = ref('');

    return { message }
})
