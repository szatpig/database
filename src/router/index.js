// Created by szatpig at 2019/2/26.
import Loadable from 'react-loadable'
import DelayLoading from './../components/DelayLoading'

const Home = Loadable({
    loader:()=>import(/* webpackChunkName: "Home" */ './../pages/main/home'),
    loading:DelayLoading,
    delay:3000
});

export default [{
    path:'/home',
    component:Home
}]




