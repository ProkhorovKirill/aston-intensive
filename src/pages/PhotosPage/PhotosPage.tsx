import { NavLink, useNavigate, useParams } from "react-router-dom";
import photos from './lib/links';
import { useCallback, useEffect, useMemo } from "react";
import sharedStyles from '../../shared/ui/shared.module.css';
import PhotosItem from "./PhotosItem";

export default function PhotosPage() {

    const params = useParams();
    const navigate = useNavigate();

    const id: number = Number(params.id) || 1;

    useEffect(() => {
    
        if (isNaN(Number(params.id))) {
            navigate('/albums/1/photos', {replace: true});
        }
    
    }, [params.id, navigate]);

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
            
            <PhotosItem id={id}/>
        </>
    )

}