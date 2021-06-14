import { User } from './User'

export interface ReturnedUserData {
    data?: User[]
    error?: string
    loading: boolean
}