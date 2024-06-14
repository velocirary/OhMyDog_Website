import { Helmet } from 'react-helmet-async'

import { Cta } from './components/cta'
import { PostsList } from './components/posts-list'

export function Posts() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Postagens" />

      <div className="container max-w-screen-2xl px-6">
        <Cta />
        <PostsList />
      </div>
    </main>
  )
}
