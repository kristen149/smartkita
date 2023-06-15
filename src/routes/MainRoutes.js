import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const OverviewDefault = Loadable(lazy(() => import('pages/dashboard')));


// render - overview

const Gesamtwarteliste = Loadable(lazy(() => import('pages/overviewPages/Gesamtwarteliste')));
const Belegungsliste = Loadable(lazy(() => import('pages/overviewPages/Belegungsliste')));
const Personensuche = Loadable(lazy(() => import('pages/overviewPages/Personensuche')));
const Einrichtungen = Loadable(lazy(() => import('pages/overviewPages/Einrichtungen')));
const Finanzen = Loadable(lazy(() => import('pages/overviewPages/Finanzen')));
const Unternehmen = Loadable(lazy(() => import('pages/overviewPages/Unternehmen')));
const Auswertungen = Loadable(lazy(() => import('pages/overviewPages/Auswertungen')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/smartkita',
      element: <OverviewDefault />
    },
    {
      path: 'overview',
      children: [
        {
          path: 'default',
          element: <OverviewDefault />
        }
      ]
    },
    {
      path:'gesamtwarteliste',
      element: <Gesamtwarteliste/>
    },
    {
      path:'belegungsliste',
      element: <Belegungsliste/>
    },
    {
      path:'personensuche',
      element: <Personensuche/>
    },
    {
      path:'einrichtungen',
      element: <Einrichtungen/>
    },
    {
      path:'finanzen',
      element: <Finanzen/>
    },
    {
      path:'unternehmen',
      element: <Unternehmen/>
    },
    {
      path:'auswertungen',
      element: <Auswertungen/>
    }
  ]
};

export default MainRoutes;
