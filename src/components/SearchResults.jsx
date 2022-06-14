import { useEffect, useState } from "react"
import CompleteData from "./CompleteData"

const SearchResults = ({ data, search }) => {
    const [resultData, setResultData] = useState([])
    console.log(data)

    useEffect(() => {
        const regex = new RegExp(`\\b${search.toUpperCase()}\\b`)
        const customData = data.filter((bank) => regex.test(bank.bank_name))
        setResultData(customData)
    }, [search])

    return (
        <>
            <CompleteData data={resultData} />
        </>
    )
}

export default SearchResults