const pecent = 0.5

document.write('<link rel="stylesheet" href="./index.css">');
const body = document.getElementsByTagName('body')[0]
const container = document.createElement('div')
const fatherDom1 = document.createElement('div')
const fatherDom2 = document.createElement('div')
container.className='container'
fatherDom1.className='father1'
fatherDom2.className='father2'
container.appendChild(fatherDom1)
container.appendChild(fatherDom2)
body.appendChild(container)
container.style.width = '100vw'
container.style.height = '100vh'

const clientWidth = container.clientWidth
const clientHeight = container.clientHeight
const setLong = clientHeight > clientWidth ? clientWidth : clientHeight
fatherDom1.style.width = setLong * 2 + 'px'
fatherDom2.style.width = setLong * 2 + 'px'
fatherDom1.style.height = setLong + 'px'
fatherDom2.style.height = setLong + 'px'

class Meteors {
    constructor(options) {
        this.options = options
    }
    innerDiv(dom) {
        const createDom = document.createElement('div')
        createDom.className = 'meteor'
        createDom.style.cssText = `width:${this.options.width}px;height:${this.options.height}px;background:${this.options.background};top:calc(${this.options.top}% - ${this.options.height}px);border-radius:500px`
        dom.appendChild(createDom)
        setTimeout(() => { dom.removeChild(createDom) }, 20000)
    }
}
function createRandom(min = 0, max = 1) {
    return random = (Math.random() * (max - min) + min).toFixed(2)
}

function createDom() {
    const meteor1 = new Meteors({
        width: createRandom(setLong * 0.46*pecent, setLong * 0.16*pecent),
        height: createRandom(setLong * 0.16*pecent, 10),
        top: createRandom(0, 100),
        background: `linear-gradient(to left,rgba(${createRandom(0, 256)},${createRandom(0, 256)},${createRandom(0, 256)},${createRandom()}),rgba(0,0,0,0))`
    })
    meteor1.innerDiv(fatherDom1)
    const meteor2 = new Meteors({
        width: createRandom(setLong * 0.46*pecent, setLong * 0.16*pecent),
        height: createRandom(setLong * 0.16*pecent, 10),
        top: createRandom(0, 100),
        background: `linear-gradient(to left,rgba(${createRandom(0, 256)},${createRandom(0, 256)},${createRandom(0, 256)},${createRandom()}),rgba(0,0,0,0))`
    })
    meteor2.innerDiv(fatherDom2)
    return createDom
}

setInterval(createDom(), 1000)

class Gauss {
    constructor(options) {
        this.options = options
    }
    innerDiv(dom) {
        const createDom = document.createElement('div')
        createDom.className = 'gauss'
        createDom.style.cssText = `width:${this.options.width}px;height:${this.options.height}px;background:${this.options.background};top:${this.options.top}vh;left:${this.options.left}vw;border-radius:50%`
        dom.appendChild(createDom)
        setTimeout(() => { dom.removeChild(createDom) }, 10000)
    }
}

function createGaussDom() {
    const long1 = createRandom(setLong * 0.05*pecent, setLong * 0.02*pecent)
    const gauss1 = new Gauss({
        width: long1,
        height: long1,
        top: createRandom(0, 100),
        left: createRandom(0, 50),
        background: `rgb(${createRandom(0, 256)},${createRandom(0, 256)},${createRandom(0, 256)},${createRandom()})`,
    })
    gauss1.innerDiv(fatherDom1)
    const long2 = createRandom(setLong * 0.05*pecent, setLong * 0.02*pecent)
    const gauss2 = new Gauss({
        width: long2,
        height: long2,
        top: createRandom(0, 100),
        left: createRandom(0, 50),
        background: `rgb(${createRandom(0, 256)},${createRandom(0, 256)},${createRandom(0, 256)},${createRandom()})`,
    })
    gauss2.innerDiv(fatherDom2)
    return createGaussDom
}

setInterval(createGaussDom(), 1000)