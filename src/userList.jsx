
import { use } from 'react'
import SingleUser from './singleUser'
export default function Users({userPromise}){

   const allUser = use(userPromise)

    return(
        <div className="card">
            <h3>Users: {allUser.length}</h3>
            {
                allUser.map(user => <SingleUser user={user}></SingleUser>)
            }
        </div>
    )
}