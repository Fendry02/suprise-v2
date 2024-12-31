'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Annee() {
  const router = useRouter()
  const [answer, setAnswer] = useState('')
  const correctAnswers = ['2006', '2007']

  const checkAnswer = () => {
    if (correctAnswers.includes(answer)) {
      ;(
        document.getElementById('right-response') as HTMLDialogElement
      )?.showModal()
    } else {
      ;(
        document.getElementById('wrong-response') as HTMLDialogElement
      )?.showModal()
    }
  }

  const handleNavigation = () => {
    router.push('/lieu')
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen p-16">
      <h1 className="text-4xl font-bold pb-16">
        En quelle année sommes-nous sortis ensemble la première fois ?
      </h1>
      <input
        type="number"
        placeholder="Année"
        className="input input-bordered w-full max-w-xs"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button className="btn btn-primary btn-lg mt-16" onClick={checkAnswer}>
        Valider
      </button>

      <dialog
        id="wrong-response"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">Mauvaise réponse</h3>
          <p className="py-4">Ce n'est pas la bonne année !</p>
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
          <p className="py-4">Super ! C'est la bonne année, bonne mémoire !</p>
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
