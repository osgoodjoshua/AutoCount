import Background from '../assets/images/parking_garage.jpg'


function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-yellow-100 bg-opacity-75 text-blue-900 text-5xl rounded'>Welcome</h3>
        </div>
    </div>
  )
}

export default Home