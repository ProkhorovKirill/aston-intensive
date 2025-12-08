import { useCallback, useMemo, useState } from "react";
import { useGetAlbumsQuery } from "../../widgets/PostList/api/postsListApi";
import sharedStyles from '../../shared/ui/shared.module.css';
import type { Album } from "./model/interfaces";
import styles from './albumsPage.module.css';

export default function AlbumsPage() {

    const [userId, setUserId] = useState<number | string>('');

    const numericUserId = useMemo(() => {

        const numUserId = Number(userId);

        return numUserId >= 1 && numUserId <= 10 ? numUserId : undefined;
        
    }, [userId]);

    const {data: albumsList, error, isLoading} = useGetAlbumsQuery(numericUserId!, {
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
        
        if (!albumsList?.length) return null

        return (
            <div className={styles.albumsWrapper}>
                {albumsList.map((album: Album) => (
                    <p key={album.id} className={styles.albumItem}>{album.title}</p>
                ))}
            </div>
        )

    }, [albumsList])

    return (

        <>
            <div className={styles.getUserIDWrapper}>
                <label htmlFor="userId" className={styles.getUserIDLabel}>
                    Введите ID пользователя (от 1 до 10)
                    <input
                        type="number"
                        value={userId}
                        onChange={handleChangeUserId}
                        name="userId"
                        id="userId"
                        className={styles.getUserIDInput}
                    />
                </label>
            </div>

                {isLoading && <h2 className={sharedStyles.centralTitle}>Загрузка</h2>}

                {error && <h2 className={sharedStyles.centralTitle}>Ошибка</h2>}

                {!isLoading && !error && albums}

        </>

    )

}