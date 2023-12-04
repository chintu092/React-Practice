function Table({tableData}){
    return(
        <table className="border-collapse table-auto w-full text-sm mt-5">
            <thead>
                <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">S.N</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Full Name</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Email Address</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Salary</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Description</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Location</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Push Notifications</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Favourite Food</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-[#000000] dark:text-slate-200 text-left">{index+1}</td>
                            <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-[#000000] dark:text-slate-200 text-left">{data.fullName}</td>
                            <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-[#000000] dark:text-slate-200 text-left">{data.emailAddress}</td>
                            <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-[#000000] dark:text-slate-200 text-left">{data.salary}</td>
                            <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-[#000000] dark:text-slate-200 text-left">{data.description}</td>
                            <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-[#000000] dark:text-slate-200 text-left">{data.location}</td>
                            <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-[#000000] dark:text-slate-200 text-left">{data.pushnotifications}</td>
                            <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-[#000000] dark:text-slate-200 text-left">{data.favfood}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;