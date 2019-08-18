export default {
    path: '/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowplaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingsoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },

        {           //这个是正在热映的详情页面路由，中间加个数字 1 和下面的详情页面区分
            path : 'detail/1/:movieId',   //动态路由
            components : {
                default : ()=> import('@/components/NowPlaying'), //默认显示同一个页面的另一个 router-view 
                // 根据 router-view 的 name 跳转
                detail : () => import('@/views/Movie/detail')   
            },
            props : {
            //路由传参数，名字要和上面的router-view的name对应，如果是像上边那样不是动态路由直接写props为true就行了
                detail : true    
            }
        },

        {           //这个是即将上映的详情页面路由，中间加个数字 2 和上面的详情页面区分
            path : 'detail/2/:movieId',   //动态路由
            components : {
                default : ()=> import('@/components/ComingSoon'), //默认显示同一个页面的另一个 router-view 
                // 根据 router-view 的 name 跳转
                detail : () => import('@/views/Movie/detail')   
            },
            props : {
            //路由传参数，名字要和上面的router-view的name对应，如果是像上边那样不是动态路由直接写props为true就行了
                detail : true    
            }
        },
        {
            path : '/movie',
            redirect : '/movie/nowplaying'
        }
    ]
}