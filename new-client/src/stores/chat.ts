import { defineStore } from "pinia";

export interface User {
    username: string;
    avatar_url?: string;
}

interface State {
    participants: User[];
}

export const useChatsStore = defineStore('chats', (): State => {
    return {
        participants: [
            {
                username: 'kermit_the_frog',
                avatar_url: 'https://i.pinimg.com/280x280_RS/4f/d2/e6/4fd2e680d096b19adec4a4cd654c29be.jpg'
            },
        ]
    };
});