import { HomePage, FollowingPage } from '~/pages';
const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/following',
        component: FollowingPage,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
