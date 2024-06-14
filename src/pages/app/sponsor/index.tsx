import { Helmet } from 'react-helmet-async'

import { Benefits } from './components/benefits'
import { Cta } from './components/cta'
import { ReasonForTurnSponsor } from './components/reasons-for-turn-sponsor'
import { Testimonials } from './components/testimonials'

export function Sponsor() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Patrocinador" />

      <Cta />
      <div className="container max-w-screen-2xl space-y-32 px-6 py-32">
        <ReasonForTurnSponsor />
        <Benefits />
        <Testimonials />
      </div>
    </main>
  )
}
