import { useGetAlbumsQuery } from "../../widgets/PostList/api/postsListApi";
import { useMemo } from "react";
import type { Album } from "./model/interfaces";
import styles from './albumsPage.module.css';
import sharedStyles from '../../shared/ui/shared.module.css'

export default function AlbumItem ({id} : {id: number}) {

    const {data: albums, isFetching, error, isLoading} = useGetAlbumsQuery(id);

    const albumsList = useMemo(() => {
        
        if (!albums?.length) return null

        return (
            !isLoading && <div className={styles.albumsWrapper}>
                {albums.map((album: Album) => (
                    <p key={album.id} className={styles.albumItem}>{album.title}</p>
                ))}
            </div>
        )

    }, [albums, isLoading])

    return (

        <>

            {isFetching && !error && <h2 className={sharedStyles.centralTitle}>Загрузка</h2>}

            {error && <h2 className={sharedStyles.centralTitle}>Ошибка</h2>}

            {!isFetching && !error && albumsList}

        </>

    )

}