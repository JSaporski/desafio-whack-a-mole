// Selecionar todos os buracos com toupeiras
const moles = document.querySelectorAll('.mole.show-mole')

function infiniteMoles() {
  moles.forEach(mole => {
    setTimeout(() => {
      mole.classList.remove('show-mole')
    }, 7700)

    setTimeout(() => {
      mole.classList.add('show-mole')
    }, 8000)
  })

  setTimeout(infiniteMoles, 8000) // Agenda a execução do loop pra 8 segundos.
}

infiniteMoles()
