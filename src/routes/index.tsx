import * as React from 'react'
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import NotFound  from '@components/notFound'
import Loading from '@components/loading'

const {lazy, Suspense} = React

const Dashboard = lazy(() => import( /* webpackChunkName:"dashboard" */ '@pages/dashboard/dashboard'))
const Chart = lazy(() => import( /* webpackChunkName:"charts" */ '@pages/charts'))
const LogApi = lazy(() => import( /* webpackChunkName:"logApi" */ '@pages/logs/api'))
const LogErrors = lazy(() => import( /* webpackChunkName:"logErrors" */ '@pages/logs/errors'))
const ArticleList = lazy(() => import( /* webpackChunkName:"articleList" */ '@pages/article/articleList'))
const ArticleEdit = lazy(() => import( /* webpackChunkName:"articleEdit" */ '@pages/article/articleEdit'))
const ArticleCreate = lazy(() => import( /* webpackChunkName:"articleCreate" */ '@pages/article/articleCreate'))
const ArticleTypeList = lazy(() => import( /* webpackChunkName:"articleTypeList" */ '@pages/articleType/articleTypeList'))
const ArticleTypeEdit = lazy(() => import( /* webpackChunkName:"articleTypeEdit" */ '@pages/articleType/articleTypeEdit'))
const ArticleTypeCreate = lazy(() => import( /* webpackChunkName:"articleTypeCreate" */ '@pages/articleType/articleTypeCreate'))
const TagList = lazy(() => import( /* webpackChunkName:"tagList" */ '@pages/tag/tagList'))
const TagEdit = lazy(() => import( /* webpackChunkName:"tagEdit" */ '@pages/tag/tagEdit'))
const TagCreate = lazy(() => import( /* webpackChunkName:"tagCreate" */ '@pages/tag/tagCreate'))
const CommentList = lazy(() => import( /* webpackChunkName:"commentList" */ '@pages/comment/commentList'))
const CommentEdit = lazy(() => import( /* webpackChunkName:"commentEdit" */ '@pages/comment/commentEdit'))
const LeaveMsgList = lazy(() => import( /* webpackChunkName:"leaveMsgList" */ '@pages/leaveMsg/leaveMsgList'))
const LeaveMsgEdit = lazy(() => import( /* webpackChunkName:"leaveMsgEdit" */ '@pages/leaveMsg/leaveMsgEdit'))
const UserList = lazy(() => import( /* webpackChunkName:"userList" */ '@pages/user/userList'))
const UserEdit = lazy(() => import( /* webpackChunkName:"userEdit" */ '@pages/user/userEdit'))
const UserCreate = lazy(() => import( /* webpackChunkName:"userCreate" */ '@pages/user/userCreate'))
const BallList = lazy(() => import( /* webpackChunkName:"ballList" */ '@pages/lottery/ballList'))
const BallCreate = lazy(() => import( /* webpackChunkName:"ballCreate" */ '@pages/lottery/ballCreate'))
const BallEdit = lazy(() => import( /* webpackChunkName:"ballEdit" */ '@pages/lottery/ballEdit'))
const BallTrend = lazy(() => import( /* webpackChunkName:"ballTrend" */ '@pages/lottery/ballTrend'))
const BallChart = lazy(() => import( /* webpackChunkName:"ballChart" */ '@pages/lottery/ballChart'))

const Demo = lazy(() => import( /* webpackChunkName:"demo" */ '@pages/demo/demo'))


export const routes: RouteProps[] = [
  {
    path: '/home',
    exact: true,
    component: Dashboard
  },
  {
    path: '/home/charts',
    exact: true,
    component: Chart
  },
  {
    path: '/home/log-api',
    exact: true,
    component: LogApi
  },
  {
    path: '/home/log-errors',
    exact: true,
    component: LogErrors
  },
  {
    path: '/home/blog-article',
    exact: true,
    component: ArticleList
  },
  {
    path: '/home/blog-article/:id',
    exact: true,
    component: ArticleEdit
  },
  {
    path: '/home/blog-articleCreate',
    exact: true,
    component: ArticleCreate
  },
  {
    path: '/home/blog-type',
    exact: true,
    component: ArticleTypeList
  },
  {
    path: '/home/blog-type/:id',
    exact: true,
    component: ArticleTypeEdit
  },
  {
    path: '/home/blog-typeCreate',
    exact: true,
    component: ArticleTypeCreate
  },
  {
    path: '/home/blog-tag',
    exact: true,
    component: TagList
  },
  {
    path: '/home/blog-tagCreate',
    exact: true,
    component: TagCreate
  },
  {
    path: '/home/blog-tag/:id',
    exact: true,
    component: TagEdit
  },
  {
    path: '/home/blog-comment',
    exact: true,
    component: CommentList
  },
  {
    path: '/home/blog-comment/:id',
    exact: true,
    component: CommentEdit
  },
  {
    path: '/home/blog-message',
    exact: true,
    component: LeaveMsgList
  },
  {
    path: '/home/blog-message/:id',
    exact: true,
    component: LeaveMsgEdit
  },
  {
    path: '/home/blog-user',
    exact: true,
    component: UserList
  },
  {
    path: '/home/blog-user/:id',
    exact: true,
    component: UserEdit
  },
  {
    path: '/home/blog-userCreate',
    exact: true,
    component: UserCreate
  },
  {
    path: '/home/lottery-balls',
    exact: true,
    component: BallList
  },
  {
    path: '/home/lottery-ball',
    exact: true,
    component: BallCreate
  },
  {
    path: '/home/lottery-ball/:id',
    exact: true,
    component: BallEdit
  },
  {
    path: '/home/lottery-trend',
    exact: true,
    component: BallTrend
  },
  {
    path: '/home/lottery-chart',
    exact: true,
    component: BallChart
  },
  {
    path: '/home/demos',
    exact: true,
    component: Demo
  },
  {
    path: '*',
    component: NotFound
  },
]

const Routes = (authorized: boolean) => <Suspense fallback={<Loading/>}>
  <Switch>
  {
    routes.map(r => {
      const {path, exact, component} = r
      const LazyCom = component
      return <Route key={path + ''} exact={exact} path={path} render={(props: any) => (authorized ? <LazyCom {...props}/> : <Redirect to="/login"/>)}/>
    })
  }
  </Switch>
</Suspense>

export default Routes