import React from "react";
import { AiFillStar, AiOutlineMessage } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdAccountBalanceWallet, MdPointOfSale } from "react-icons/md";
import Dashboardata from "./Data";

const Dashboard = () => {
  return (
    <>
      <section className="">
        <main className="h-full ">
          <div className="container px-6 mx-auto">
            <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Dashboard
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

            {/* card */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-400">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-full text-orange-500 bg-orange-100 mr-4">
                    <HiUserGroup className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-gray-600">
                      Total clients
                    </p>
                    <p className="text-lg font-semibold text-gray-700 ">6861</p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-400">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-full text-purple-500 bg-purple-100 mr-4">
                    <MdAccountBalanceWallet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-gray-600">
                      Account balance
                    </p>
                    <p className="text-lg font-semibold text-gray-700 ">
                      $ 46,325.34
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-400">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-full text-green-500 bg-green-100 mr-4">
                    <MdPointOfSale className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-gray-600">
                      New sales
                    </p>
                    <p className="text-lg font-semibold text-gray-700 ">661</p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-400">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-full text-teal-500 bg-teal-100 mr-4">
                    <AiOutlineMessage className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-gray-600">
                      Pending Contacts
                    </p>
                    <p className="text-lg font-semibold text-gray-700 ">35</p>
                  </div>
                </div>
              </div>
            </div>
            {/* table */}
            <div className="w-full overflow-hidden rounded-lg border-2 shadow-xs">
              <div className="w-full overflow-x-auto">
                <table class="w-full whitespace-nowrap">
                  <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50 ">
                    <tr>
                      <th class="py-3 px-6 text-left">Client</th>
                      <th class="py-3 px-6 text-left">Amount</th>
                      <th class="py-3 px-6 text-left">Status</th>
                      <th class="py-3 px-6 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-700 text-sm font-light bg-white">
                    {Dashboardata.map((items) => (
                      <tr class="border-b border-gray-300 " key={items.id}>
                        <td class="py-5 px-4 text-left whitespace-nowrap">
                          <div class="flex items-center">
                            <p className="font-semibold">{items.name}</p>
                          </div>
                        </td>
                        <td class="py-5 px-4 text-center whitespace-nowrap">
                          <div class="flex items-center text-sm">
                            {items.amount}
                          </div>
                        </td>
                        <td class="py-5 px-4 text-center whitespace-nowrap">
                          <div class="flex items-center">
                            <span
                              className="px-2 text-xs 
                          font-medium rounded-full text-purple-700 bg-purple-100"
                            >
                              {items.status}
                            </span>
                          </div>
                        </td>
                        <td class="py-5 px-4 text-center whitespace-nowrap">
                          <div class="flex items-center">{items.date}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* navigations */}
            <div className="px-4 py-3 rounded-b-lg border-2 dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800">
              <div
                className="flex flex-col justify-between text-xs sm:flex-row
                 text-gray-600 dark:text-gray-400"
              >
                <span className="py-2 flex items-center font-semibold tracking-wide uppercase">
                  Showing 1-10 OF 45
                </span>
                <div className="flex mt-2 sm:mt-auto sm:justify-end"></div>
              </div>
            </div>
            <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Charts
            </h1>
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
