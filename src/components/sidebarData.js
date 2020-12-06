import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as WiIcons from "react-icons/wi";

export const SidebarData = [
    {
        title: 'Weather',
        path: '/',
        icon: <WiIcons.WiCloudy />,
        cName: 'nav-text'
    },
    {
        title: 'Forecast',
        path: '/forecast',
        icon: <WiIcons.WiDayCloudyHigh />,
        cName: 'nav-text'
    },
    {
        title: 'AboutUs',
        path: '/aboutus',
        icon: <AiIcons.AiOutlineIdcard />,
        cName: 'nav-text'
    },
]