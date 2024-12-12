import {useState} from 'react'

const SonComponent = ({data, handleData2}) => {

    const [phone, setPhone] = useState("")
    const [addr, setAddr] = useState("")

    const handleClick = () => {
        handleData2({phone:phone,addr:addr})
    }

    return (
        <div>
            <h2>자식 Component 가 받은 Data</h2>
            {data.name}<br/>
            {data.age}<br/>
            <hr/>
            <input type="text" name="phone" onChange={e=>setPhone(e.target.value)}/> <br/>
            <input type="text" name="addr" onChange={e=>setAddr(e.target.value)}/> <br/>
            <button onClick={()=>handleClick({phone,addr})}>부모에게 전달</button>
        </div>
    )
}

export default SonComponent