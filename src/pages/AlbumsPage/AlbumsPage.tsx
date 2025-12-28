import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import albums from "./lib/links";
import { useCallback, useMemo } from "react";
import AlbumItem from "./AlbumItem";
import sharedStyles from '../../shared/ui/shared.module.css';

export default function AlbumPage() {

    const params = useParams();
    const navigate = useNavigate();

    const id: number = Number(params.id) || 1;

    useEffect(() => {

        if (isNaN(Number(params.id))) {
            navigate('/users/1/albums', {replace: true});
        }

    }, [params.id, navigate]);

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
            
            <AlbumItem id={id}/>

        </>
    )

}