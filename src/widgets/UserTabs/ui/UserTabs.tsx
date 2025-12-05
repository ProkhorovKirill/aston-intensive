import { NavLink } from "react-router-dom";
import { links, type LinkType } from "../lib/links";

export default function UserTabs() {

    return (

        <>
            <h2>Usertabs</h2>
            <div>
                {links.map((item: LinkType) => {
                    return <div key={item.id}>
                                <NavLink to={item.to}>{item.text}</NavLink>
                            </div>
                })}
            </div>
        </>

    )

}   