import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

import CategoriesPreview from '../Categories-preview/Categories-preview';
import Category from '../Category/Category';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray));
        }

        getCategoriesMap();
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;