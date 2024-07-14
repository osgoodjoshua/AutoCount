import DataTable from '../components/DataTable';
import background from '../assets/images/parking_garage.jpg'; 


function Dashboard() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl">
          <h1 className="flex justify-center p-5  text-white text-6xl">Dashboard</h1>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;