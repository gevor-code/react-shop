import React, {useEffect} from 'react';
import Admin from "../Admin";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../../store/user";


const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Category Name</th>
                </tr>
                </thead>
                <tbody>
                {categories && categories.length > 0 ? (
                    categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="1">No categories found</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryList;
