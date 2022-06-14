const CompleteData = ({ data }) => {
    return (
        <>
            <div className="max-w-[1290px] grid grid-cols-3">
                {data.map(bank => (
                    <div key={bank.id} className='flex flex-col justify-between gap-2 px-4 py-8 border-2'>
                        <span className="text-2xl font-semibold">{bank.bank_name}</span>
                        <div className="flex flex-col gap-2">
                            <span className="text-xl italic font-bold">{bank.account_number}</span>
                            <span>{bank.routing_number}</span>
                            <span>{bank.iban}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CompleteData