import { useNavigate, useRouteError } from "react-router-dom"

type RouteError = {
  message: string
}

const ErrorPage = () => {

    const error = useRouteError() as RouteError
    const navigate = useNavigate()

  return (
    <div className="space-y-8">
        <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">PAGE ERROR</h1>
        <p className="text-center text-2xl">Hubo un error</p>
        <p className="text-center">{error.message}</p>
        <div className=" flex justify-center">
          <button
            type="button"
            className=" text-center text-white font-black uppercase rounded-md shadow-md bg-blue-700 hover:bg-blue-900 transition-all py-2 px-4"
            onClick={
              () => navigate('/')
            }
          >
            Volver o Recargar
          </button>
        </div>
    </div>
  )
}

export default ErrorPage