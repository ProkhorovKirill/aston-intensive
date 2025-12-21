import type { User } from '@/entities/user/model/types'

export default function UsersItem ({userData} : {userData: User}) {

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
        </div>
    )

}