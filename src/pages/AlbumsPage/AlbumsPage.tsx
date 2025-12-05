import { useCallback, useMemo, useState } from "react";
import { useGetAlbumsQuery } from "../../widgets/PostList/api/postsListApi";
import sharedStyles from '../../shared/ui/shared.module.css';
import type { Album, AlbumList } from "./model/interfaces";

export default function AlbumsPage() {

    const [userId, setUserId] = useState<number | string>('');

    const numericUserId = useMemo(() => {

        const numUserId = Number(userId);

        return numUserId >= 1 && numUserId <= 10 ? numUserId : undefined;
        
    }, [userId]);

    const {data: albumsList, error, isLoading} = useGetAlbumsQuery(Number(userId), {
        skip: !numericUserId,
    });

    const handleChangeUserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {

        if (Number(e.target.value) > 10) {
            setUserId(10)
            return
        }

        if(!e.target.value) {
            setUserId('');
            return
        }

        if (Number(e.target.value) < 1) {
            setUserId(1)
            return
        }

        setUserId(Number(e.target.value));

    }, [])

    const albums = useMemo(() => {
        
        if (!albumsList) return

        return (
            <div>
                {albumsList.map((album: Album) => (
                    <p key={album.id}>{album.title}</p>
                ))}
            </div>
        )

    }, [albumsList])

    return (

        <>
            <label htmlFor="userId">
                Введите ID пользователя (от 1 до 10)
                <input 
                    type="number" 
                    value={userId} 
                    onChange={handleChangeUserId}
                    name="userId"
                    id="userId"
                    /> 
                </label>

                {isLoading && <h2 className={sharedStyles.centralTitle}>Загрузка</h2>}

                {error && <h2 className={sharedStyles.centralTitle}>Ошибка</h2>}

                {albums}


        </>

    )

}