'use client'
import { useRouter } from 'next/navigation'

export default function Lieu() {
  const router = useRouter()

  const openModal = () => {
    ;(document.getElementById('modal') as HTMLDialogElement)?.showModal()
  }

  const handleNavigation = () => {
    router.push('/restaurant')
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen p-16">
      <h1 className="text-4xl font-bold pb-16">
        Félicitations ! Grâce à ta réponse, tu peux découvrir la date de cet
        évènement !
      </h1>
      <button className="btn btn-success btn-lg mt-16" onClick={openModal}>
        Découvrir
      </button>
      <dialog id="modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="text-lg text-success">
            Cet évènement aura lieu le <strong>Jeudi 9 Janvier 2025</strong>
          </p>
          <p className="py-4">Mais qu&apos;est ce que ça peut bien être ?</p>
          <p>
            Tu découvriras la réponse dans l&apos;endroit le plus chaud
            probablement de l&apos;appartment
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-outline btn-success"
                onClick={handleNavigation}
              >
                Suivant
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  )
}
