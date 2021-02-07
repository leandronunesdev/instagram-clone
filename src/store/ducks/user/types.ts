export enum TypeUser {
    GET_USER = 'GET_USER'
}

export interface User {
    name: string,
    username: string,
    userPicture: string
}

export interface UserState {
    user: User
}