const $newCont = document.querySelector('#new')
const $act = document.querySelectorAll('.action')
let $arraCommand = []
$newCont.addEventListener('click',(()=>{
	const q = parseInt(prompt('ingrese un numero'))
	const p = new contador(q)

	for(let i = 0; i < $act.length; i++){
		$act[i].addEventListener('click',(()=>{
		const id = $act[i].getAttribute('id')
		if (id != null){
			$arraCommand.push(id)
		}
		switch (id) {
			case 'add':
				p.add()
				break;
			case 'remove':
				p.remove()
				break;
			case 'Show':
				const paragraph = document.querySelector('#text').innerHTML = p.valorActual()
				break;
			case 'reset':
				p.reset()
				break;
			case 'change':
				let input = parseInt(document.querySelector('#input').value)
				p.valorActual(input)
				break;
			default:
				getCommont($arraCommand)
			}
		}))
	}
}))

function contador(inicial) {
	this.inicial = inicial
	this.add = () => inicial += 1
	this.remove = () => inicial -= 1
	this.reset = () => inicial = 0
	this.valorActual = (e) => {
		if (e == undefined) {
			return inicial
		}else {
			return inicial = e
		}
	}
}

function getCommont (arr) {
	const lastItem = arr[arr.length - 1]
	const text = document.createTextNode(lastItem)
	const p = document.createElement('p')
	p.appendChild(text)
	const place = document.querySelector('#showPcreated')
	place.appendChild(p)

}