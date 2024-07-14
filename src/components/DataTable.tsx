import { useState } from 'react'
import Modal from "./Modal"
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData'


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true},
    { field: 'make', headerName: "Make", flex: 1},
    { field: 'model', headerName: "Model", flex: 1},
    { field: 'year', headerName: "Year", flex: 1},
    { field: 'color', headerName: "Color", flex: 1}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([]);

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const handleActionComplete = () => {
        setOpen(false);
        getData();
        setTimeout(() => {
          window.location.reload();
        }, 500);
    };

    const deleteData = async () => {
        await server_calls.delete(selectionModel[0]);
        handleActionComplete();
    };

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
            onActionComplete={handleActionComplete}
        />
        <div className="flex flex-row p-3">
            <div className='place-content-center'>
            <button onClick={() => handleOpen()} className="p-5 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
            >Add</button>
            <button onClick={handleOpen} className="p-5 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
            >Update</button>
            <button onClick={deleteData} className="p-5 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
            >Delete</button>
            </div>
        </div>
        <div className={ open ? "hidden" : "my-5 flex flex-col bg-yellow-100 rounded bg-opacity-65"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 my-2 rounded bg-yellow-500 ">My Car Inventory</h2>
            <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[10]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable