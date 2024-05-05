import Comingsoon from '../../assets/images/Comingsoon.png'
export const ComingSoon = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <img src={Comingsoon} alt="" className='h-[200px]  w-[200px]'/>
    <h1 className="text-2xl font-bold mb-4">Coming Soon!</h1>
    <p className="text-lg">We're working on something awesome. Stay tuned!</p>
    </div>
    
    </>
  )
}
