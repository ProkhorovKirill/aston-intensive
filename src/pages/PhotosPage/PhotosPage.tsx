import { NavLink, useParams } from "react-router-dom";
import photos from './lib/links';
import { useCallback, useMemo } from "react";
import sharedStyles from '../../shared/ui/shared.module.css';
import PhotosItem from ".//PhotosItem";

export default function PhotosPage() {

    const params = useParams();

    const photosList = useMemo(() => {
        return photos
    }, [])

    const getNavLinkClassName = useCallback(
        ({ isActive }: { isActive: boolean }): string => 
            isActive ? `${sharedStyles.activeLink}` : `${sharedStyles.Link}`, []);

    return (
        <>
            <div className={sharedStyles.linksWrapper}>
                {photosList.map((photo) => {
                    return <p key={photo.id}>
                                <NavLink to={photo.to} className={getNavLinkClassName}>
                                    {photo.text}
                                </NavLink>
                            </p>    
                })}
            </div>
            
            {!isNaN(Number(params.id)) && <PhotosItem id={Number(params.id)}/>}
        </>
    )

}