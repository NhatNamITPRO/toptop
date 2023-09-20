import { HomePage, FollowingPage,Upload,Profile } from '~/pages';
import HeaderOnly from '~/components/Layouts/HeaderOnly';
const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/following',
        component: FollowingPage,
    }, 
    {
        path: '/upload',
        component: Upload,
        layout:HeaderOnly
    },    
    {
        path: '/profile',
        component: Profile,
        layout: null
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
