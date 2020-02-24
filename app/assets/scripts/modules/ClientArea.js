import Axios from 'axios'

class ClientArea {
  constructor() {
    this.injectHTML()
    this.form = document.querySelector(".client-area__form")
    this.field = document.querySelector(".client-area__input")
    this.contentArea = document.querySelector(".client-area__content-area")
    this.events()
  }

  events() {
    // we want to listen to the HTML form element being submitted
    this.form.addEventListener("submit", event => {
      event.preventDefault() // no refresh
      this.sendRequest()
    })
  }

  sendRequest() {
    // communicate with the cloud function
    // we could use the web browser fetch API functionnality to send off and asynchronous request 
    // here we use Axios
    Axios.post('https://pensive-rosalind-383c21.netlify.com/.netlify/functions/secret-area', {
      password: this.field.value
    }).then(response => {
      this.form.remove()
      this.contentArea.innerHTML = response.data
    }).catch(() => {
      this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
      this.field.value = ''
      this.field.focus()
    })
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="client-area">
      <div class="wrapper wrapper--medium">
        <h2 class="section-title section-title--blue">Secret Client Area</h2>
        <form class="client-area__form" action="">
          <input class="client-area__input" type="text" placeholder="Enter the secret phrase">
          <button class="btn btn--orange">Submit</button>
        </form>
        <div class="client-area__content-area"></div>
      </div>
    </div>
    `)
  }
}

export default ClientArea