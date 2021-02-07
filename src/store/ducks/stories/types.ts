export enum TypesStories {
    GET_STORIES = 'GET_STORY'
}

export interface StoryItem {
    id: number,
    user: string,
    userPicture: string,
    time: string
}

export interface Stories {
    arrayStories: StoryItem[]
}

export interface StoriesState {
    stories: Stories
}