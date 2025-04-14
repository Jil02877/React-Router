import React, {useState, useEffect } from 'react' 
// import { useLoaderData } from 'react-router-dom'
const GitHub = () => {
    // const data = useLoaderData()
    // method-1
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Jil02877')
        .then((res)=>res.json())
        .then(data => setData(data))
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers: {data.followers}
    <img src={data.avatar_url} alt="github" width={300}/>
    </div>
  )
}

export default GitHub

//method-2
// export const githubInfoLoader = async () => {
//     const res = await fetch('https://api.github.com/users/Jil02877')
//     return res.json()
// }