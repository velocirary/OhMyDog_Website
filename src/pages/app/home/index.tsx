import { Helmet } from 'react-helmet-async'

import { Benefits } from './components/benefits-app'
import { Cta } from './components/cta'
import { Faq } from './components/faq'
import { ReasonsSponsor } from './components/reasons-sponsor-app'

export function Home() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Home" />

      <div className="container max-w-screen-2xl px-6">
        <Cta />
        <ReasonsSponsor />
        <Benefits />
        <Faq />
      </div>
    </main>
  )
}
