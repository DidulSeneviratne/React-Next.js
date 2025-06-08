import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const [thirdAnimal, first, second, zero] = ["girrafe", "zebra", "bear", "cat", "dog"];

console.log(zero);

createRoot(document.getElementById('root')).render(
    <App />
)