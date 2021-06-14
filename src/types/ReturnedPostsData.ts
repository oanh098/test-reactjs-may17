import { Post } from './Post'

export interface ReturnedPostsData {
    data?: Post[]
    error: string
    loading: boolean
}