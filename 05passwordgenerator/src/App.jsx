import { useState, useCallback } from 'react'
import './App.css'

function App() {
	const [lenght, setlength] = useState(8)
	const [numbersallowed, setnumbersllowed] = useState(false)
	const [characters, setcharacters] = useStat(false)
	const [password, setpassword] = useState("")

	const PasswordGenerator = useCallback( () =>{    // using usecallback function.
		let pass = ""
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
		if (numbersallowed){
			
		}

	}, [lenght, numbersallowed, characters, password])
		
	}

	return (
		<>
		<h1 className='text-4xl text-center text-white'>Password Generator</h1>

		</>
	)

export default App
