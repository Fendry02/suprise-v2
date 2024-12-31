'use client'
import { useRouter } from 'next/navigation'

import Banner from './components/banner'

export default function Home() {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/nature')
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-between">
      <Banner />
      <div className="flex flex-col items-center justify-center gap-16 px-16">
        <h1 className="text-6xl font-bold text-primary font-sans">Surprise</h1>
        <p className="text-2xl font-bold text-primary">
          Bienvenue dans cette nouvelle chasse au trésor pour découvrir ton
          cadeau d’anniversaire !
        </p>
        <button className="btn btn-primary btn-lg" onClick={handleNavigation}>
          Commencer
        </button>
      </div>
      <Banner />
    </section>
  )
}
