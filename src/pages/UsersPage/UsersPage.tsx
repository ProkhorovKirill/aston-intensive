import { useGetUsersQuery } from '../../entities/user/api/usersApi';
import sharedStyles from '../../shared/ui/shared.module.css';
import type { User } from '@/entities/user/model/types';
import UsersItem from './UsersItem';


export default function UsersPage() {

    const {data: users, error, isLoading} = useGetUsersQuery();

    return (
        <>
            {!isLoading && !error && users && <div className={sharedStyles.linksWrapper}>
                {users.map((user: User) => {
                    return  <div key={user.id}>
                                <UsersItem userData={user}/>
                            </div>
                })}
            </div>}
            
        </>
    )

}