import { useParams } from 'react-router-dom';
import {Title, CategoryContainer} from './Category.styles'
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/Product-card/Product-card';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </ Fragment>

    )
}

export default Category;