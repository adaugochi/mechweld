export const OurHistory = () => {

    const historyRecord = [
        {
            year: "2019",
            text: "Founded by Engr. Wisdom  and John Doe and grows into a full-service engineering firm, with a reputation for performance and integrity. ",
            textColor: "text-white"
        },
        {
            year: "2020",
            text: "Founded by Engr. Wisdom  and John Doe and grows into a full-service engineering firm, with a reputation for performance and integrity. ",
            textColor: "text-white/50"
        },
        {
            year: "2021",
            text: "Founded by Engr. Wisdom  and John Doe and grows into a full-service engineering firm, with a reputation for performance and integrity. ",
            textColor: "text-white/50"
        },
    ]

    return (
        <>
            <div className="bg-[#1A1A1A] md:py-20 py-10">
                <div className="w-[90%] lg:w-[80%] mx-auto">
                    <h1 className="text-center text-[#FDD028] font-semibold text-3xl font-raleway">Our History</h1>
                    <div className="mt-20 flex flex-col gap-8">
                        {historyRecord.map((record, index) => (
                            <div className="flex justify-between flex-col md:flex-row" key={index}>
                                <h1 className={`font-bold text-5xl font-raleway mb-2 md:mb-0 ${record.textColor}`}>{record.year}</h1>
                                <div className="md:max-w-[50%]">
                                    <p className={`font-montserrat ${record.textColor}`}>{record.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}