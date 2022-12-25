import React from "react";

function ResultTable({ data }) {
  return (
    <div className="w-10/12 mb-5" key={data.reg_no}>
      <h1 className="text-center text-transparent bg-gradient-to-r to-emerald-800 from-emerald-600 text-2xl font-medium bg-slate-700 text-white mb-5  inline-block w-full p-3 rounded-b-none rounded-xl">
        Semester {data.semester}
      </h1>
      {/* <div className="flex justify-center mt-11">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-200 from-gray-600">
          Semester {data.semester}
        </span>
      </h1>
    </div> */}
      <div className="border-4">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left">
                <tbody className="flex flex-col">
                  <tr className="border-b-2">
                    <th
                      scope="col"
                      class="w-32 text-center text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Degree
                    </th>
                    <td className="text-left pl-5">{data.degree}</td>
                  </tr>
                  <tr className="border-b-2">
                    <th
                      scope="col"
                      className="w-32 text-center text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Roll No
                    </th>
                    <td className="text-left pl-5">{data.roll_no}</td>
                  </tr>
                  <tr className="border-b-2">
                    <th
                      scope="col"
                      className="w-32 text-center text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Name
                    </th>
                    <td className="text-left pl-5">{data.name}</td>
                  </tr>
                  <tr className="border-b-2">
                    <th
                      scope="col"
                      className="w-32 text-end text-sm font-medium text-gray-900 px-6 py-4 border-r pr-2"
                    >
                      Father Name
                    </th>
                    <td className="text-left pl-5">{data.father_name}</td>
                  </tr>
                  <tr className="border-b-2">
                    <th
                      scope="col"
                      className="w-32 text-center text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Reg No
                    </th>
                    <td className="text-left pl-5">{data.reg_no}</td>
                  </tr>
                  <tr className="border-b-2">
                    <th
                      scope="col"
                      className="w-32 text-center text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Credit
                    </th>
                    <td className="text-left pl-5">{data.credit}</td>
                  </tr>
                  <tr className="border-b-2">
                    <th
                      scope="col"
                      className="w-32 text-center text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Institute
                    </th>
                    <td className="text-left pl-5">{data.institute}</td>
                  </tr>
                  <tr className="border-b-2">
                    <th
                      scope="col"
                      className="w-32 text-center text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Result
                    </th>
                    <td className="text-left pl-5">{data.result}</td>
                  </tr>
                  <tr className="border-b-2">
                    <th
                      scope="col"
                      className="w-32 text-center text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      CGPA
                    </th>
                    <td className="text-left pl-5">{data.cgpa}</td>
                  </tr>
                  <tr className="">
                    <th
                      scope="col"
                      className="w-32 text-end text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Semester
                    </th>
                    <td className="text-left pl-5">{data.semester}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultTable;
