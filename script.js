const avatar = document.getElementById('avatar')
const btn = document.getElementsByTagName('button')[0]
const info = document.getElementById('info')

const mail = document.getElementById('mail')
const phone = document.getElementById('phone')
const bd = document.getElementById('bd')

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const PHONE_REGEXP = /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/;
const BD_REGEXP = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;

mail.addEventListener('input', mailValid)
phone.addEventListener('input', phoneValid)
bd.addEventListener('input', bdValid)

function mailValid() {
    console.log(this)
    if (EMAIL_REGEXP.test(this.value)) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}

function phoneValid() {
    console.log(this)
    if (PHONE_REGEXP.test(this.value)) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}

function bdValid() {
    console.log(this)
    if (BD_REGEXP.test(this.value)) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}

btn.addEventListener('click', () => {
    const block = document.createElement('div')
    const wrap = document.createElement('div')
    block.classList.add('block')

    const header = document.createElement('span')
    header.innerHTML = 'header'
    header.addEventListener('click', toggle)
    header.classList.add('header')

    const title = document.createElement('span')
    title.innerHTML = 'title - '
    title.addEventListener('click', toggle)
    title.classList.add('title')

    const descr = document.createElement('span')
    descr.innerHTML = 'description'
    descr.addEventListener('click', toggle)
    descr.classList.add('descr')

    block.appendChild(header)
    wrap.appendChild(title)
    wrap.appendChild(descr)
    block.appendChild(wrap)
    info.appendChild(block)

})

function toggle() {
    const text = this.innerText
    this.innerHTML = ''
    this.removeEventListener('click', toggle)
    const inp = document.createElement('input')
    this.appendChild(inp)
    inp.value = text
    inp.addEventListener('focusout', () => {
        if (this.classList.contains('title')) {
            this.innerHTML = inp.value + " - "

        } else {
            this.innerHTML = inp.value
        }
        this.addEventListener('click', toggle)
    })
}

function download(input) {
    avatar.innerHTML = ''
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
        let img = document.createElement('img')
        avatar.appendChild(img)
        img.src = reader.result
        img.classList.add('avatar')
    }
}
