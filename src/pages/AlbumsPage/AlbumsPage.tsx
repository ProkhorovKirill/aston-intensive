/* import { useCallback, useMemo, useState } from "react";
import { useGetAlbumsQuery } from "../../widgets/PostList/api/postsListApi";
import sharedStyles from '../../shared/ui/shared.module.css';
import type { Album } from "./model/interfaces";
import styles from './albumsPage.module.css';
import { useNavigate, useParams } from "react-router-dom";

export default function AlbumsPage() {

    const urlParams = useParams();
    const navigate = useNavigate();

    const [userId, setUserId] = useState<number | string>(urlParams.id || '');

    const numericUserId = useMemo(() => {

        const numUserId = Number(userId);

        return numUserId >= 1 && numUserId <= 10 ? numUserId : undefined;
        
    }, [userId]);

    const {data: albumsList, error, isLoading} = useGetAlbumsQuery(numericUserId!, {
        skip: !numericUserId,
    });

    const handleChangeUserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {

        if (Number(e.target.value) > 10) {
            setUserId(10);
            navigate('/users/10/albums', {replace: true});
            return
        }

        if(!e.target.value) {
            setUserId('');
            navigate('/users/:id/albums', {replace: true});
            return
        }

        if (Number(e.target.value) < 1) {
            setUserId(1);
            navigate('/users/1/albums', {replace: true});
            return
        }

        setUserId(Number(e.target.value));
        navigate(`/users/${e.target.value}/albums`, {replace: true});

    }, [])

    const albums = useMemo(() => {
        
        if (!albumsList?.length) return null

        return (
            !isLoading && <div className={styles.albumsWrapper}>
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

} */

import { NavLink, useParams } from "react-router-dom";
import albums from "./lib/links";
import { useCallback, useMemo } from "react";
import AlbumItem from "./AlbumItem";
import sharedStyles from '../../shared/ui/shared.module.css';
import styles from './albumsPage.module.css'

export default function AlbumPage() {

    const params = useParams();

    const albumsList = useMemo(() => {
        return albums
    }, [])

    const getNavLinkClassName = useCallback(
        ({ isActive }: { isActive: boolean }): string => 
            isActive ? `${sharedStyles.activeLink}` : `${sharedStyles.Link}`, []);

    return (
        <>
            <div className={styles.linksWrapper}>
                {albumsList.map((album) => {
                    return <p key={album.id}>
                                <NavLink to={album.to} className={getNavLinkClassName}>
                                    {album.text}
                                </NavLink>
                            </p>    
                })}
            </div>
            {!isNaN(Number(params.id)) && <AlbumItem id={Number(params.id)}/>}

        </>
    )

} 