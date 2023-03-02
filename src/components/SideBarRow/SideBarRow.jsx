import React, { useContext } from 'react';
import { ContextApi } from '../../context/context';
import './SideBarRow.css';


export const SideBarRow = ({selected, Icon, title}) => {
    const {relatedToSidebar} = useContext(ContextApi);
    return (
        <div className={`sidebarrow ${selected ? 'selected': ''}`}>
            <Icon className='sidebarrow__icon'/>
            { relatedToSidebar.sideBar ? <h2 className='sidebarrow__title'>{title}</h2> : null}
        </div>
    )
}

