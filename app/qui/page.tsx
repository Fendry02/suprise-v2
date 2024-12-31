'use client'

import { useRouter } from 'next/navigation'

export default function Nature() {
  const router = useRouter()

  const handleWrongResponse = () => {
    ;(
      document.getElementById('wrong-response') as HTMLDialogElement
    )?.showModal()
  }

  const handleRightResponse = () => {
    ;(
      document.getElementById('right-response') as HTMLDialogElement
    )?.showModal()
  }

  const handleNavigation = () => {
    router.push('/annee')
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen p-16">
      <h1 className="text-4xl font-bold">
        Avec qui souhaites-tu partager cette occasion ?
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full max-w-md sm:max-w-4xl pt-16">
        <button
          className="btn btn-primary btn-outline"
          onClick={handleWrongResponse}
        >
          Rodolphe
        </button>
        <button
          className="btn btn-primary btn-outline"
          onClick={handleRightResponse}
        >
          Ton Amour
        </button>
        <button
          className="btn btn-primary btn-outline"
          onClick={handleWrongResponse}
        >
          Antoine
        </button>
        <button
          className="btn btn-primary btn-outline"
          onClick={handleWrongResponse}
        >
          Gaetan
        </button>
        <button
          className="btn btn-primary btn-outline"
          onClick={handleWrongResponse}
        >
          Alix
        </button>
        <button
          className="btn btn-primary btn-outline"
          onClick={handleWrongResponse}
        >
          Lucile
        </button>
      </div>

      <dialog
        id="wrong-response"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">Mauvaise réponse</h3>
          <p className="py-4">Tu n'as pas choisi la bonne personne !</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline btn-error">Fermer</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog
        id="right-response"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-success">Bonne réponse</h3>
          <p className="py-4">Super ! Ce sera avec moi !</p>
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
