import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable'
import './Users.scss'
import {userRows} from "../../data"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 100,
    editable: true,
   renderCell:(params)=>(
      <img src={params.row.img||"noavatar.png"} alt="" 
      // style={{width:"40%",borderRadius:"50%"}}
      />
    )
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 100,
    editable: true,
    type:"boolean"
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 160,
    renderCell:(params)=>(
       <div className='action'>
          <div className="edit">Edit</div>
          <div className="delete">Delete</div>
        </div>
    )
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,verified:true,img:"https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg"},
  { id: 2, lastName: 'Lannister',verified:true, firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,img: "https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Users = () => {
  return (
    <div className='ss'>
      <div className="info">
      <h1>User Page</h1>
      <button>Add New User</button>
      </div>
      <DataTable  columns={columns} rows={userRows}/>
    </div>
  )
}

export default Users