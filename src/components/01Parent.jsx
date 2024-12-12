
import SonComponent_01 from "./01Son";
import {useState} from "react";

const ParentComponent = () => {
    const [data2,setData2] = useState({})
    const data = {name:"hong", age:30}

    const handleData2 = (data) => {
        //선처리 (생략)
        setData2(data)
    }


    return (
        <div>
            <SonComponent_01 data = {data} handleData2={handleData2}/>
            <hr/>
            <h2>부모가 받은 데이터</h2>
            {data2?data2:''}
        </div>
    )
}

export default ParentComponent