import React, {useEffect, useState} from 'react';
import Admin from "../Admin";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../../store/user";
import axios from "axios";


const CategoryList = () => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8081/categories');
                if (response && response.data) {
                    setCategories(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getCategories();
    }, []);

    return (
        <div>
            <Admin/>
            <div className="flex items-center justify-center bg-green-200 h-screen ">
            <div className="flex absolute top-[38%] left-[32%] border-2 bg-[#F5F5DC] p-[5rem] flex-col gap-8 items-center w-[50vw]">
                <table className="min-w-full text-center text-sm font-light bg-[#faebd7] ">
                    <caption className="caption-top mb-[20px] text-3xl font-extrabold font-[Roboto] italic">
                        Category List
                    </caption>
                    <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                        <th className="px-6 py-3 text-[20px]">Name</th>
                        <th className="px-6 py-3 text-[20px]">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="">
                    {categories.map((category) => (
                        <tr className="border-b dark:border-neutral-500" key={category.id}>
                            <td className="border border-slate-700  px-6 py-4">{category.category}</td>
                            <td className="border border-slate-700  px-6 py-4 flex gap-6 justify-around ">
                                <button><svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 10H16M8 6H12M8 14H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg></button>

                            <td className="border border-slate-700 flex justify-around">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor" className="bi bi-trash text-red" viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                            fill="red"></path>
                                        <path fill-rule="evenodd"
                                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                              fill="red"></path>
                                    </svg></button>
                            </td>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>

    );
};

export default CategoryList;
