import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { RegisterLayout } from '@/pages/_layouts/register'
import { Contact } from '@/pages/app/contact'
import { Faq } from '@/pages/app/faq'
import { Home } from '@/pages/app/home'
import { Posts } from '@/pages/app/posts'
import { Sponsor } from '@/pages/app/sponsor'
import { PrivateRoute } from '@/private-route'

import { AdminLayout } from './pages/_layouts/admin'
import { AdminHome } from './pages/admin/home'
import { AdminManageUsers } from './pages/admin/manage-users'
import { AdminPostsForApproval } from './pages/admin/posts-for-approval'
import { AdminReportsForVerify } from './pages/admin/reports-for-verify'
import { AdminSponsorForApproval } from './pages/admin/sponsor-for-approval'
import { DonationsAuth } from './pages/auth/donations'
import { AuthHome } from './pages/auth/home'
import { PostAuth } from './pages/auth/posts'
import { ReportAuth } from './pages/auth/reports'
import { SponsorAuth } from './pages/auth/sponsor'
import { SponsorVoucher } from './pages/auth/sponsor/sponsor-voucher'
import { UserPosts } from './pages/auth/user-posts'
import { SignIn } from './pages/register/sign-in'
import { SignUp } from './pages/register/sign-up'

export const router = createBrowserRouter([
  // No-Authenticated User routes
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/postagens',
        element: <Posts />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/patrocinador',
        element: <Sponsor />,
      },
      {
        path: '/contato',
        element: <Contact />,
      },
    ],
  },

  // Auth routes
  {
    path: '/',
    element: <RegisterLayout />,
    children: [
      {
        path: '/login',
        element: <SignIn />,
      },
      {
        path: '/cadastro',
        element: <SignUp />,
      },
    ],
  },

  // Authenticated User routes
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/app/',
        element: <PrivateRoute element={<AuthHome />} routeType={['U', 'P']} />,
      },

      {
        path: '/app/postagens',
        element: <PrivateRoute element={<PostAuth />} routeType={['U', 'P']} />,
      },

      {
        path: '/app/patrocinador',
        element: (
          <PrivateRoute element={<SponsorAuth />} routeType={['U', 'P']} />
        ),
      },

      {
        path: '/app/patrocinador',
        element: (
          <PrivateRoute element={<SponsorVoucher />} routeType={['P']} />
        ),
      },

      {
        path: '/app/doacoes',
        element: (
          <PrivateRoute element={<DonationsAuth />} routeType={['U', 'P']} />
        ),
      },

      {
        path: '/app/denuncia',
        element: (
          <PrivateRoute element={<ReportAuth />} routeType={['U', 'P']} />
        ),
      },

      {
        path: '/app/meus-posts',
        element: (
          <PrivateRoute element={<UserPosts />} routeType={['U', 'P']} />
        ),
      },
    ],
  },

  // Admin layout
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        path: '/admin/',
        element: <PrivateRoute element={<AdminHome />} routeType={['A']} />,
      },

      {
        path: '/admin/postagem-aprovacao',
        element: (
          <PrivateRoute element={<AdminPostsForApproval />} routeType={['A']} />
        ),
      },

      {
        path: '/admin/patrocinadores-aprovacao',
        element: (
          <PrivateRoute
            element={<AdminSponsorForApproval />}
            routeType={['A']}
          />
        ),
      },

      {
        path: '/admin/gerenciar-usuarios',
        element: (
          <PrivateRoute element={<AdminManageUsers />} routeType={['A']} />
        ),
      },

      {
        path: '/admin/denuncias',
        element: (
          <PrivateRoute element={<AdminReportsForVerify />} routeType={['A']} />
        ),
      },
    ],
  },
])
