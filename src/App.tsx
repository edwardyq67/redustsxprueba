import { useEffect } from 'react'

import './App.css'

import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getConocimiento } from './redux/slice/conocimiento'



function App() {
  const count = useAppSelector(state => state.conocimiento)
  const dispatch = useAppDispatch()


  useEffect(()=>{
    dispatch(getConocimiento())
  },[])
  console.log(count.data)
  return (
    <div className="pb-4 ">
            {count.data.map(infoP => (
                <div data-aos="fade-down"  key={infoP.id} className="flex flex-col bg-inherit rounded-b-lg items-center gap-4 lg:my-[4em] my-[3em] rounded-xl shadow-md md:flex-row container mx-auto">

                    <div className=" cursor-default flex flex-col justify-between leading-normal">
                        <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-400">{infoP.titulo}</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">{infoP.parrafo}</p>
                        <div className="w-full grid  xl:grid-cols-5 gap-1 my-4 lg:grid-cols-4 grid-cols-3 ">
                        {infoP.lenguajes.map((iconLeng: any) => (
                            <img key={iconLeng.id} className="w-[3em]  mx-auto mb-4" src={iconLeng.url} alt="" />
                            ))}
                        </div>
                    </div>
                  
                </div>
            ))}
        </div>
  )
}

export default App
