import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../Categories-preview/Categories-preview';
import Category from '../Category/Category';

const Shop = () => {
    return (
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=':category' element={<Category />} />
            </Routes>
    );
};

export default Shop;