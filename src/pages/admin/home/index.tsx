import { Helmet } from 'react-helmet-async'

import { PostsForApprove } from './components/posts-for-approve'
import { AdminQuickLinks } from './components/quick-links'
import { ReportsForVerify } from './components/reports-for-verify'
import { SponsorForApprove } from './components/sponsor-for-approve'

export function AdminHome() {
  return (
    <>
      <Helmet title="Admin Home" />

      <div className="container max-w-screen-2xl px-6 py-16">
        <AdminQuickLinks />
        <PostsForApprove />
        <SponsorForApprove />
        <ReportsForVerify />
      </div>
    </>
  )
}
