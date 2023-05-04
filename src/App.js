import './App.css';
import {useState, useEffect} from "react";

function App() {
  const api = {
    base:"https://psgc.gitlab.io/api/provinces/"
  }

  const [value, setValue] = useState([])
  const [option, setOption] = useState()

  const [value1, setValue1] = useState([])
  const [option1, setOption1] = useState()
  
  const [value2, setValue2] = useState([])
  const [option2, setOption2] = useState()

  const [province, setProvince] = useState('')
  const [citymuni, setCitymuni] = useState('')
  const [barangay, setBarangay] = useState('')

  useEffect(()=>{
    fetch(`${api.base}`).then((data)=>data.json()).then((val)=>setValue(val))
  },[])

  fetch(`${api.base}/${option}/cities-municipalities/`).then((data)=>data.json()).then((val)=>setValue1(val))
  fetch(`https://psgc.gitlab.io/api/cities-municipalities/${option1}/barangays/`).then((data)=>data.json()).then((val)=>setValue2(val))

  fetch (`https://psgc.gitlab.io/api/provinces/${option}`).then((data)=>data.json()).then(res => setProvince(res.name))
  fetch (`https://psgc.gitlab.io/api/cities-municipalities/${option1}`).then((data)=>data.json()).then(res => setCitymuni(res.name))
  fetch (`https://psgc.gitlab.io/api/barangays/${option2}`).then((data)=>data.json()).then(res => setBarangay(res.name))

  return (
    <div className="App">
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    Province
  </h5>
  <div>
      <br/>
      <select onChange={(e)=>setOption(e.target.value)} className="text-center">
        {
          value.map((opts,i) => <option key={i} value={opts.code}> {opts.name} </option>)
        }
      </select> <br/> <br/>
      
      <select onChange={(e)=>setOption1(e.target.value)} >{
          value1.map((opts,i) => <option key={i} value={opts.code}> {opts.name} </option>)
        }
      </select> <br/><br/>

      <select onChange={(e)=>setOption2(e.target.value)} > {
          value2.map((opts,i) => <option key={i} value={opts.code}> {opts.name} </option>)
        }
      </select> <br/><br/><br/>
      
          <div>
            {province && <p className="text-white text-center">Province: {province}</p>}
            {citymuni && <p className="text-white text-center">City or Municipality: {citymuni}</p>}
            {barangay && <p className="text-white text-center">Barangay: {barangay}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
