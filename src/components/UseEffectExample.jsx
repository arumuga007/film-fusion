import { useEffect, useState } from "react";

const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde34cd8f5msh88994d94fab9e68p18ea88jsn0096a040c9c4',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
const UseEffectExample = () => {
    
    const [data, setData] = useState('');
    useEffect(() => {
        fetch(url, options)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            setData(data.d[0].l)
        })
    }, []);
    return (
        <div>{data}</div>
    )
}

export default UseEffectExample;