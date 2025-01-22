import Login from './src/Pages/Login/Login';
import Dashboard from './src/Pages/Dashboard/Dashboard';

const AppRoutes = [
    {
        index: true,
        element: <Login/>
    },
    {
        path: '/login',
        element: <Login />
        /*React는 UMD 전역을 참조하지만 현재 파일은 모듈입니다. 라는 에러가 있었는데 tsconfig.json include 에 tsx 넣어주니 됨.*/

    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
];

export default AppRoutes;