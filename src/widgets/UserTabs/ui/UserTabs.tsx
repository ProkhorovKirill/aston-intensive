import { NavLink } from "react-router-dom";
import { links, type LinkType } from "../lib/links";
import sharedStyles from '../../../shared/ui/shared.module.css';
import styles from './userTabs.module.css'
import { useCallback, useMemo } from "react";

export default function UserTabs() {

    const getNavLinkClassName = useCallback(
        ({ isActive }: { isActive: boolean }): string => 
            isActive ? `${sharedStyles.activeLink}` : `${sharedStyles.Link}`, []);

    const renderedLinks = useMemo(() => 
        links.map((item: LinkType) => (
            <div key={item.id}>
                <NavLink 
                    to={item.to} 
                    className={getNavLinkClassName}>
                    {item.text}
                </NavLink>
            </div>
        )), [links, getNavLinkClassName]);

    return (

        <>
            <nav className={styles.userTabsContainer}>
                {renderedLinks}
            </nav>
        </>

    )

}   