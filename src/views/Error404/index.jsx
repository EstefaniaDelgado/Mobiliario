import { useRouteError } from "react-router-dom"


const Error404 = () => {

    const {status, data}= useRouteError()
    

  return (
    <div>
      <h1>Error: {status}</h1>
      <span>{data}</span>
    </div>
  )
}

export default Error404
