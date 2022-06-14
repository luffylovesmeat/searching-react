import axios from "axios"
import { useEffect, useState } from "react"
import CompleteData from "./CompleteData"
import { useParams } from 'react-router-dom'

const SearchResults = () => {
    const [resultData, setResultData] = useState([])
    const { search } = useParams()

    const fetchData = async () => {
        const result = await axios.get(`https://searchapi-v1.herokuapp.com/api/v1/find/${search.toUpperCase()}`)
        setResultData(result.data)
    }

    useEffect(() => {
        fetchData()
    }, [search])

    return (
        <CompleteData data={resultData} />
    )
}

export default SearchResults