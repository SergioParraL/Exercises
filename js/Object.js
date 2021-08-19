const $newCont = document.querySelector('#new')

const $act = document.querySelectorAll('.action')
 
$newCont.addEventListener('click',(()=>{
	const q = parseInt(prompt('ingrese un numero'))
	const p = new contador(q)

	
	for(let i = 0; i < $act.length; i++){
		$act[i].addEventListener('click',(()=>{
			if($act[i].getAttribute('id') == 'add'){
				p.add()
			}
			if($act[i].getAttribute('id') == 'remove'){
				p.remove()
			}
			if($act[i].getAttribute('id') == 'Show'){
				const paragraph = document.querySelector('#text').innerHTML = p.valorActual()
			}
			if($act[i].getAttribute('id') == 'reset'){
				p.reset()
			}

			if($act[i].getAttribute('id') == 'change'){
				let input = parseInt(document.querySelector('#input').value)
				p.valorActual(input)
				
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

