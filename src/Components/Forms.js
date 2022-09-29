import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Forms = () => {
  return (
    <>
      <section className="">
        <main className="h-full ">
          <div className="container px-6 mx-auto">
            <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Forms
            </h1>
            <div className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none ">
              <div className="flex items-center">
                <AiFillStar className="w-5 h-5 mr-2" />
                <p>Star this project on GitHub</p>
              </div>
              <a href="#" className="flex items-center ">
                View more <BsArrowRight className="ml-1" />
              </a>
            </div>
            <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-200">
              Elements
            </h2>
            <div className="w-full overflow-hidden rounded-lg border-2 shadow-xs bg-white">
              <div className="px-3 py-4">
                <label
                  htmlFor=""
                  className="block text-sm text-gray-700 dark:text-gray-400"
                >
                  <span>Name</span>
                  <input
                    type="text"
                    className="mt-2 w-full text-sm p-2 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                    placeholder="Jane Doe"
                  />
                </label>
                <label
                  htmlFor=""
                  className="block text-sm text-gray-700 dark:text-gray-400 mt-4"
                >
                  <span>Disabled</span>
                  <input
                    type="text"
                    className="block w-full p-2 text-sm focus:outline-none  leading-5 cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800 mt-2
                    border rounded-md  "
                    placeholder="Jane Doe"
                  />
                </label>
                <div className="mt-2">
                  <label
                    htmlFor=""
                    className="block text-sm text-gray-700 dark:text-gray-400"
                  >
                    CheckBox
                  </label>

                  <div class="flex mt-2">
                    <div class="flex items-center mr-4">
                      <input
                        id="inline-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Inline 1
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id="inline-2-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-2-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Inline 2
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        checked=""
                        id="inline-checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-checked-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Inline checked
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        disabled=""
                        id="inline-disabled-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="inline-disabled-checkbox"
                        class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                      >
                        Inline disabled
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Select an option
                    </label>
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected="">Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label
                      for="countries_multiple"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Select an option
                    </label>
                    <select
                      multiple=""
                      id="countries_multiple"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected="">Choose countries</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="mt-3 flex flex-col">
                    <label htmlFor="">Messages</label>
                    <textarea
                      className="block w-full text-sm dark:text-gray-300 form-textarea focus:outline-none focus:border-purple-400  mt-1 border rounded-md p-2"
                      placeholder="Enter some long form content"
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <div class="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Default checkbox
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="my-5 text-lg font-semibold text-gray-600 dark:text-gray-200">
              Validation
            </h2>
            <div className="w-full overflow-hidden rounded-lg border-2 shadow-xs bg-white">
              <div className="px-3 py-4">
                <label
                  htmlFor=""
                  className="block text-sm text-gray-700 dark:text-gray-400 mb-2"
                >
                  <span> Default outlined</span>
                </label>
                <div class="relative border border-gray-500 rounded-lg ">
                  <input
                    type="text"
                    id="default_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="default_outlined"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Default outlined
                  </label>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor=""
                    className="block text-sm text-gray-700 dark:text-gray-400 mb-2"
                  >
                    <span> Small filled</span>
                  </label>
                  <div class="relative rounded-t-lg">
                    <input
                      type="text"
                      id="small_filled"
                      class="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      for="small_filled"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Small filled
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor=""
                    className="block text-sm text-gray-700 dark:text-gray-400 mb-2"
                  >
                    <span> Outlined error</span>
                  </label>
                  <div class="relative rounded-lg border appearance-none  border-red-600">
                    <input
                      type="text"
                      id="outlined_error"
                      aria-describedby="outlined_error_help"
                      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                      placeholder=" "
                    />
                    <label
                      for="outlined_error"
                      class="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Outlined error
                    </label>
                  </div>
                  <p
                    id="outlined_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span class="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                </div>
                <div className="mt-3">
                  <label
                    for="input-group-1"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <div class="relative mb-6">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@flowbite.com"
                    />
                  </div>
                  <label
                    for="website-admin"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <div class="flex">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      @
                    </span>
                    <input
                      type="text"
                      id="website-admin"
                      class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="elonmusk"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Forms;
