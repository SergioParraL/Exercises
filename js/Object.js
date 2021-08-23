const $newCont = document.querySelector('#new')
const $act = document.querySelectorAll('.action')
 
$newCont.addEventListener('click',(()=>{
	const q = parseInt(prompt('ingrese un numero'))
	const p = new contador(q)

	for(let i = 0; i < $act.length; i++){
		$act[i].addEventListener('click',(()=>{
		const id = $act[i].getAttribute('id')
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

