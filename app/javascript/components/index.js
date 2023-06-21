import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

document.addEventListener('turbo:load', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const root =  createRoot(div);
  root.render(<App />)
})