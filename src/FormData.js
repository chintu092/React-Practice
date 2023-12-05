function FormData({ handleChange, formInputData, handleSubmit, handleOnRadioChange, handleOnCheckBoxChange, FormErrorsData}) {

    return (
        <form className="grid grid-cols-3 gap-4" onSubmit={handleSubmit}>
            <div className="col">
                <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="block w-full rounded-sm border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d3d3d3] sm:text-sm sm:leading-6" placeholder="Full Name" />
                <p className="error-box"><span>{FormErrorsData.fullName}</span></p>
            </div>
            <div className="col">
                <label className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                <input type="text" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="block w-full rounded-sm border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d3d3d3] sm:text-sm sm:leading-6" placeholder="Email Address" />
                <p className="error-box"><span>{FormErrorsData.emailAddress}</span></p>
            </div>
            <div className="col">
                <label className="block text-sm font-medium leading-6 text-gray-900">Salary</label>
                <input type="text" onChange={handleChange} value={formInputData.salary} name="salary" className="block w-full rounded-sm border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d3d3d3] sm:text-sm sm:leading-6" placeholder="Salary" />
                <p className="error-box"><span>{FormErrorsData.salary}</span></p>
            </div>
            <div className="col">
                <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <textarea onChange={handleChange} value={formInputData.description} name="description" className="block w-full rounded-sm border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d3d3d3] sm:text-sm sm:leading-6" placeholder="Description" />
                <p className="error-box"><span>{FormErrorsData.description}</span></p>
            </div>
            <div className="col">
                <label className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                <select onChange={handleChange} value={formInputData.location} name="location" className="block w-full rounded-sm border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d3d3d3] sm:text-sm sm:leading-6">
                    <option>Select Location</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>
                <p className="error-box"><span>{FormErrorsData.location}</span></p>
            </div>
            <fieldset className="col-span-full relative">
              <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-3">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="pushnotifications"
                    type="radio"
                    value="Everything"
                    onChange={handleOnRadioChange}
                    checked={formInputData.pushnotifications === 'Everything'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="pushnotifications"
                    type="radio"
                    value="Sameasemail"
                    onChange={handleOnRadioChange}
                    checked={formInputData.pushnotifications === 'Sameasemail'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="pushnotifications"
                    type="radio"
                    value="Nopushnotifications"
                    onChange={handleOnRadioChange}
                    checked={formInputData.pushnotifications === 'Nopushnotifications'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
              <p className="error-box"><span>{FormErrorsData.pushnotifications}</span></p>
            </fieldset>
            <fieldset className="col-span-full relative">
              <legend className="text-sm font-semibold leading-6 text-gray-900">Favourite Food</legend>
              <div className="mt-3">
                <div className="flex items-center gap-x-3">
                  <input
                    id="fav-cake"
                    name="favfood"
                    type="checkbox"
                    defaultValue="Cake"
                    onChange={handleOnCheckBoxChange}
                    defaultChecked={formInputData.favfood.includes('Cake')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="fav-cake" className="block text-sm font-medium leading-6 text-gray-900">
                  Cake
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="fav-biscuit"
                    name="favfood"
                    type="checkbox"
                    defaultValue="Biscuit"
                    onChange={handleOnCheckBoxChange}
                    defaultChecked={formInputData.favfood.includes('Biscuit')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="fav-biscuit" className="block text-sm font-medium leading-6 text-gray-900">
                    Biscuit
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="fav-chickenchowmin"
                    name="favfood"
                    type="checkbox"
                    defaultValue="Chicken_Chowmin"
                    onChange={handleOnCheckBoxChange}
                    defaultChecked={formInputData.favfood.includes('Chicken_Chowmin')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="fav-chickenchowmin" className="block text-sm font-medium leading-6 text-gray-900">
                    Chicken Chowmin
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="fav-whitesaucepasta"
                    name="favfood"
                    type="checkbox"
                    defaultValue="White_Sauce_Pasta"
                    onChange={handleOnCheckBoxChange}
                    defaultChecked={formInputData.favfood.includes('White_Sauce_Pasta')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="fav-whitesaucepasta" className="block text-sm font-medium leading-6 text-gray-900">
                    White Sauce Pasta
                  </label>
                </div>
                {/* <div className="col">
                <label className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                <input type="file" name="uploadImage" onChange={handleUploadImg} className="block w-full rounded-sm border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#d3d3d3] sm:text-sm sm:leading-6" placeholder="Email Address" autoComplete="email" required />
            </div> */}
              </div>
              <p className="error-box"><span>{FormErrorsData.favfood}</span></p>
            </fieldset>
            <div className="col-span-full">
                <button type="submit" className="mt-2 rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit </button>
            </div>
        </form>


    )
}
export default FormData;