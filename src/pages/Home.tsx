import Background from '../assets/images/parking_garage.jpg'


function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-slate-300 bg-opacity-15 rounded text-white text-6xl'>Welcome</h3>
        </div>
    </div>
  )
}

export default Home