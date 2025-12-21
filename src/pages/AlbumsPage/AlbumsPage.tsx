import { NavLink, useParams } from "react-router-dom";
import albums from "./lib/links";
import { useCallback, useMemo } from "react";
import AlbumItem from "./AlbumItem";
import type { AlbumLinks } from './lib/links';
import sharedStyles from '@/shared/ui/shared.module.css';


export default function AlbumPage() {

    const params = useParams<{id: string}>();

    const albumsList: AlbumLinks[] = useMemo(() => {
        return albums
    }, [])

    const getNavLinkClassName: ({ isActive }: { isActive: boolean }) => string = useCallback(
        ({ isActive }) => 
            isActive ? `${sharedStyles.activeLink}` : `${sharedStyles.Link}`, []);

    return (
        <>
            <div className={sharedStyles.linksWrapper}>
                {albumsList.map((album: AlbumLinks) => {
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