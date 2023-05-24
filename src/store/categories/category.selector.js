import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    // Whatever output of input selector, will be the argument of output selector
    (categoriesSlice) => categoriesSlice.categories,
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        // from {title: 'Hats', items: Array(9)}, ...
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        // to {hats: Array(9), jackets: Array(5), mens: Array(6), sneakers: Array(8), womens: Array(7)}
        return acc;
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading,
)