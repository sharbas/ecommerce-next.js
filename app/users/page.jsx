  import React from 'react'
  async function usersDetailsFetch(){
    const res=await fetch('https://api.escuelajs.co/api/v1/users')
  
    if(!res.ok){
        throw new Error('failed to fetch data from products')
    }
    return res.json()
  
  }
 async function UserList() {
  const usersData=await usersDetailsFetch()
  console.log(usersData);

    return (
      <div className="mx-auto max-w-screen-lg px-4 py-20 sm:px-8">
  <div className="flex items-center justify-center pb-20 ">
    <div >
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
    </div>
  </div>
  <div className="overflow-y-hidden rounded-lg border ">
    <div className="overflow-x-auto ">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3">ID</th>
            <th className="px-5 py-3">Avatar</th>
            <th className="px-5 py-3">Name</th>
            <th className="px-5 py-3">Email</th>
            <th className="px-5 py-3">Role</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
        {usersData.map((user,index)=>(

          <tr key={index}>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{user.id}</p>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div className="flex items-center">
                <div className="h-10 w-10 flex-shrink-0">
                  <img className="h-full w-full rounded-full" src={user.avatar} alt="" />
                </div>
              
              </div>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{user.name}</p>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{user.email}</p>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{user.role}</p>
            </td>
          </tr>
        ))}
     
  
     
        </tbody>
      </table>
    </div>
    {/* <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
      <div class="mt-2 inline-flex sm:mt-0">
        <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
        <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
      </div>
    </div> */}
  </div>
</div>

    )
  }
  
  export default UserList