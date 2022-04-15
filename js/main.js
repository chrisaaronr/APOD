//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=SmGbzHAP3rcacsEfqS9jgMjHeyzcZw4X2IqPgUH7&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.getElementById('title').innerText = data.title
        document.getElementById('apodDate').innerText = data.date
        document.getElementById('apodExplanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}