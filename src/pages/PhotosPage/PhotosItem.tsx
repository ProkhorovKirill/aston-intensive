import { useGetPhotosQuery } from "../../entities/albums/api/albumsApi";
import { useMemo } from "react";
import sharedStyles from '../../shared/ui/shared.module.css';
import type { Photo } from "./model/interfaces";

export default function PhotosItem ({id} : {id: number}) {

    const {data: photos, isFetching, error, isLoading} = useGetPhotosQuery(id);
    
    const photosList = useMemo(() => {
        
        if (!photos?.length) return null

        return (
            !isLoading && <div className={sharedStyles.itemsWrapper}>
                {photos.map((photo: Photo) => (
                    <div key={photo.id} >
                        <p className={sharedStyles.Item}>{photo.title}</p>
                        <img src={photo.thumbnailUrl} alt="user photo" />
                    </div>
                ))}
            </div>
        )

    }, [photos, isLoading])

    return (

        <>

            {isFetching && !error && <h2 className={sharedStyles.centralTitle}>Загрузка</h2>}

            {error && <h2 className={sharedStyles.centralTitle}>Ошибка</h2>}

            {!isFetching && !error && photosList}

        </>

    )

}