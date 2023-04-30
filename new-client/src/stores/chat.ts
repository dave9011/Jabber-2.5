import { defineStore } from "pinia";

export interface User {
    username: string;
}

interface State {
    participants: User[];
}

export const useChatsStore = defineStore('chats', (): State => {
    return {
        participants: [
            { username: 'kermit_the_frog' }
        ]
    };
});