import React from 'react'
import '../assets/styles/Components/Categories.scss'
const Categories=({ children, title })=>(
  <div>
    <h2 className="categories__title">{title}</h2>
    {children}
  </div>
)
export default Categories