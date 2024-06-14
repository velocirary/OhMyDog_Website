import { Helmet } from 'react-helmet-async'

import { Cta } from './components/cta'

export function Contact() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Dúvidas frequentes" />

      <div className="container max-w-screen-2xl px-6">
        <Cta />
      </div>
    </main>
  )
}
