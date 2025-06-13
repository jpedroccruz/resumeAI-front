document.querySelector('.comecar').addEventListener('click', async () => {
  const loader = document.querySelector('.loader')
  const url = document.querySelector('.link')

  loader.classList.remove('loader-hidden')

  fetch('http://localhost:3333/api', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      url: url.value
    })
  })
    .then(response => response.json())
    .then(data => {
      const wcGeral = document.querySelector('.wc-geral')
      const wcAdriana = document.querySelector('.wc-adriana')
      const wcLodovico = document.querySelector('.wc-lodovico')
      
      const titleGeral = document.querySelector('.title-geral')
      const titleAdriana = document.querySelector('.title-adriana')
      const titleLodovico = document.querySelector('.title-lodovico')

      wcGeral.classList.remove('hidden')
      wcAdriana.classList.remove('hidden')
      wcLodovico.classList.remove('hidden')

      titleGeral.classList.remove('hidden')
      titleAdriana.classList.remove('hidden')
      titleLodovico.classList.remove('hidden')

      const hAdriana = document.querySelector('.header-adriana')
      const hLodovico = document.querySelector('.header-lodovico')

      hAdriana.classList.remove('hidden')
      hLodovico.classList.remove('hidden')
      
      const pAdriana = document.querySelector('.p-adriana')
      const pLodovico = document.querySelector('.p-lodovico')

      pAdriana.classList.remove('hidden')
      pLodovico.classList.remove('hidden')

      pAdriana.innerHTML = data.adriana.replace(/\n/g, '<br>')
      pLodovico.innerHTML = data.lodovico.replace(/\n/g, '<br>')

      loader.classList.add('loader-hidden')
      
      url.value = ''
    })
    .catch((err) => console.error(err))
})