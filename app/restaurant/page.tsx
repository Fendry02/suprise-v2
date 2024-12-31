import Image from 'next/image'

import Banner from '../components/banner'

import plat from '@/public/plat.webp'
import salle from '@/public/salle.jpg'
import plat_2 from '@/public/plat_2.webp'
import michelin from '@/public/michelin.png'

export default function Restaurant() {
  return (
    <section className="flex flex-col items-center justify-between min-h-screen">
      <Banner />
      <div className="flex flex-col items-center justify-center max-sm:min-h-screen p-8 gap-8">
        <h1 className="text-2xl lg:text-4xl text-center">
          Pour ton anniversaire, j'ai réservé une table au restaurant:
          <br />
          <strong>Takao Takano</strong>, un restaurant{' '}
          <strong>deux étoiles</strong> au guide Michelin
        </h1>
        <div className="flex items-center justify-center gap-4">
          <Image src={michelin} alt="Michelin" width={50} height={50} />
          <Image src={michelin} alt="Michelin" width={50} height={50} />
        </div>
        <div className="flex flex-wrap max-sm:flex-col items-center justify-center content-center gap-4">
          <Image
            src={plat}
            alt="Plat"
            width={300}
            height={300}
            priority
            className="rounded-lg"
          />
          <Image
            src={plat_2}
            alt="Plat"
            width={300}
            height={300}
            priority
            className="rounded-lg mx-8"
          />
          <Image
            src={salle}
            alt="Salle"
            width={300}
            height={300}
            priority
            className="rounded-lg"
          />
        </div>
      </div>
      <Banner />
    </section>
  )
}
