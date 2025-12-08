import { NavLink, useParams } from "react-router-dom";
import albums from "./lib/links";
import { useCallback, useMemo } from "react";
import AlbumItem from "./AlbumItem";
import sharedStyles from '../../shared/ui/shared.module.css';
// import styles from './albumsPage.module.css'

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
            <div className={sharedStyles.linksWrapper}>
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