import {useEffect, useState} from 'react'
import { User } from './types/User'
import { ReturnedUserData } from './types/ReturnedUserData'
import { Post } from './types/Post'
import { ReturnedPostsData } from './types/ReturnedPostsData'
import { api } from './api/index'

//https://pagepro.co/blog/generics-in-typescript-how-to-type-reusable-parts-of-code/
/* ReturnedData<T> is an interface which describes data returned by
hook. Here we use add generics type.
 Thanks to that it is more reusable and data can be any of type
passed as T.*/
interface ReturnedData<T> {

    data?: T
    error?: string
    loading: boolean
}
// FetchedData is a type passed to useFetch during calling a hook.
export const useFetch = <FetchedData>( url: string ): ReturnedData<FetchedData> => {

// ReturnedData<FetchedData> - We pass here-data-type to our generic
// interface.
    const [fetchedData, setFetchedData] = useState<ReturnedData<FetchedData>>({loading: true})

    useEffect(() => {

        const fetchData = async (): Promise<void>  => {
            try {

                const { data } = await api.get(`${url}`)
                //const { data } = await api
                //   .get('/search/anime?q=Ghibli&page=3')
                setFetchedData({data, loading:false, error: undefined})
            } catch {
                setFetchedData({data: undefined, loading: false, error: 'st wrong'})
            }
        }//end setFetchData

        fetchData()
    }, [])//end useEffect

    return fetchedData

}

