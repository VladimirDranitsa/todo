const CARD_ADD = document.querySelector('.card-add')

window.addEventListener('click', (elem) => {
    if (elem.target.classList.contains('button-add')) {
        inputData()
    }
    if (elem.target.classList.contains('button-create')) {
        const INPUT_TITLE = document.querySelector('.card-input__input').value
        const INPUT_TEXT = document.querySelector('.card-input__textarea').value
        addCard(INPUT_TITLE, INPUT_TEXT)
    }
    if (elem.target.classList.contains('button-delete')) {
        removeCard(elem)
    }
    
})

function removeCard (elem) {
    elem.target.closest('.card').remove()
}

function inputData () {
    CARD_ADD.insertAdjacentHTML('beforebegin',`
    <li class="card card-input">
        <input
            type="text"
            class="card-input__input"
            placeholder="Enter title"
        />
        <textarea
            class="card-input__textarea"
            name="card-text"
            cols="30"
            rows="10"
            placeholder="Enter text"
        ></textarea>
        <button class="button-create">Create</button>
    </li>
    `)
}

function addCard (title, text) {
    CARD_ADD.insertAdjacentHTML('beforebegin',`
    <li class="card">
        <div class="content">
            <h5 class="heading">
                ${title}
            </h5>
            <p class="text">
                ${text}
            </p>
        </div>
        <div class="buttons">
            <button class="button-edit">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                >
                <path
                    d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"
                />
                </svg>
            </button>
            <button class="button-delete">
                <svg class="button-delete__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g id="_01_align_center" data-name="01 align center">
                        <path
                        d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"
                        />
                        <rect x="9" y="10" width="2" height="8" />
                        <rect x="13" y="10" width="2" height="8" />
                    </g>
                </svg>
            </button>
        </div>
    </li>`
  )
  removeInputCard()
}

function removeInputCard () {
    const CARD_INPUT = document.querySelector('.card-input')
    CARD_INPUT.remove()
}
