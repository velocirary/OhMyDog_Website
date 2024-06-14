import { Helmet } from 'react-helmet-async'

import { Donations } from './components/donations'
import { MyPosts } from './components/my-posts'
import { QuickLinks } from './components/quick-links'

export function AuthHome() {
  return (
    <>
      <Helmet title="Home Autenticada" />

      <div className="container max-w-screen-2xl px-6 py-16">
        <QuickLinks />
        <MyPosts />
        <Donations />
      </div>
    </>
  )
}
