import { NavLink } from "react-router-dom";
import { links, type LinkType } from "../lib/links";
import sharedStyles from '../../../shared/ui/shared.module.css';
import styles from './userTabs.module.css'

export default function UserTabs() {

    return (

        <>
            <nav className={styles.userTabsContainer}>
                {links.map((item: LinkType) => {
                    return <div key={item.id}>
                                <NavLink 
                                    to={item.to} 
                                    className={
                                        ({isActive}) => (isActive ? `${sharedStyles.activeLink}` : `${sharedStyles.Link}`)
                                    }>
                                        {item.text}
                                </NavLink>
                            </div>
                })}
            </nav>
        </>

    )

}   