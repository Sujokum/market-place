import React , {useState} from 'react'
import Calendar from 'react-calendar';
const Calenders = () => {
  const [value, onChange] = useState(new Date())
  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
    <div className="h-100 bgSecondary rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="mb-0 text-light">Calender</h5>
            <a style={{
                textDecoration : 'none',
                fontSize : '18px'
            }} className='textPrimary' href="">Show All</a>
        </div>
        <Calendar className='w-100 mt-5 text-center bg-none d-flex justify-content-center align-items-center flex-column text-light'  />
    </div>
</div>
  )
}

export default Calenders