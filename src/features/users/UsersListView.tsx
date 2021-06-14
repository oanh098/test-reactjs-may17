import React from 'react'
import { useFetch } from '../../hooks'
import { User } from '../../types/User'

export default function UsersListView() {

    const base = "https://jsonplaceholder.typicode.com";

     const { error: usersError, loading: usersLoading, data: usersData }
        = useFetch<User[]>(base + '/users')

    console.log({ error: usersError, loading: usersLoading, data: usersData })


    return (
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          {(usersLoading) && <p>Loading...</p>}
          {usersData &&
            usersData.map(({ name, id, email, address}) => {

              return (



                <div key={id} className="col">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <div className="clearfix mb-3"> <span className="float-end price-hp">{name}</span> </div>
                        <h5 className="card-title">{email}</h5>
                        <div className="text-center my-4">Street: {address.street} </div>
                    </div>
                </div>

                </div>

              );
            })}
          <h5 style={{ color: "red" }}>
            {(!!usersError ) && (usersError )}
          </h5>
        </div>
    )

}


