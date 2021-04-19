import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';

const Inicio = React.lazy(() => import("../views/inicio"));
const Quiniela = React.lazy(() => import("../views/quiniela"));

export const routes = [
    {
        path: "/admin/inicio",
        icon: <HomeRoundedIcon/>,
        name: "Inicio",
        exact: true,
        component: Inicio,
    },
    {
        path: "/admin/quiniela",
        icon:<ListAltRoundedIcon/>,
        name: "Quiniela",
        exact: true,
        component: Quiniela,
    }

];