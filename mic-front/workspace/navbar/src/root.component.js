import React from "react"
import { BrowserRouter, Link } from "react-router-dom"

export default function Root(props) {
  console.log('=====props=====',props)
  return (
    <BrowserRouter>
      <div>
        <div> <Link to="/">@single-spa/welcome</Link>{" "}</div>
        <div><Link to="/todos">@study/todos</Link>{" "}</div>
        <div> <Link to="/realworld">@study/realworld</Link></div>
        <div><Link to="/commonApp">@study/commonApp</Link>{" "}</div>
      </div>
    </BrowserRouter>
  )
}
