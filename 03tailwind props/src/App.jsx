import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart.jsx'

function App() {
	const [count, setCount] = useState(0)
	
	let myObj = {
		name: 'Tarun',
		secondname: 'TarunJoshi',
		age: 23,
		course: 'react'
	}

	return (
		<>
		<h1 className='bg-green-400 p-5 rounded-xl mb-5'>Tailwind css</h1>
		<Cart customObj={myObj.name} btnText="Click Tarun"/>
		<Cart customObj="Tarun Joshi" btnText="Tarun Joshi"/>
	</> 
	)

}
export default App
