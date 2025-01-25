import { BsSearch } from "react-icons/bs";
import {
  FiltersGroupContainer,
  SearchInputContainer,
  SearchInput,
  CategoryHeading,
  CategoriesList,
  CategoryItem,
  RatingHeading,
  RatingsList,
  RatingItem, // Correctly import RatingItem
  RatingImage,
  ClearFilterButton,
} from "./styledComponent";

const FiltersGroup = (props) => {
  // SEARCH INPUT SECTION
  const onChangeSearchInput = (event) => {
    const { updateSearchInput } = props;
    updateSearchInput(event.target.value);
  };
  const renderSearchInput = () => {
    const { searchInput } = props;
    return (
      <SearchInputContainer>
        <SearchInput
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
        />
        <BsSearch className="search-icon" />
      </SearchInputContainer>
    );
  };

  // CATEGORIES SECTION
  const renderProductCategories = () => {
    const { categoryOptions, updateCategory, activeCategoryId } = props;

    // Handle category item click
    const handleCategoryClick = (categoryId) => {
      updateCategory(categoryId);
    };

    // Render individual category item
    const renderCategoryItem = (category) => {
      const isActive = category.categoryId === activeCategoryId;

      return (
        <CategoryItem
          key={category.categoryId}
          $isActive={isActive}
          onClick={() => handleCategoryClick(category.categoryId)}
        >
          <p>{category.name}</p>
        </CategoryItem>
      );
    };

    return (
      <div>
        <CategoryHeading>Category</CategoryHeading>
        <CategoriesList>
          {categoryOptions.map(renderCategoryItem)}{" "}
          {/* Render all category items */}
        </CategoriesList>
      </div>
    );
  };

  // Ratings section
  const renderRatingsFilters = () => {
    const { ratingsList, updateRating, activeRatingId } = props;

    return (
      <div>
        <RatingHeading>Rating</RatingHeading>
        <RatingsList>
          {ratingsList.map((rating) => {
            const onClickRatingItem = () => updateRating(rating.ratingId);
            const isActive = rating.ratingId === activeRatingId;
            return (
              <RatingItem
                $isActive={isActive}
                key={rating.ratingId}
                onClick={onClickRatingItem}
              >
                <RatingImage
                  src={rating.imageUrl}
                  alt={`rating ${rating.ratingId}`}
                />
                <p>& up</p>
              </RatingItem>
            );
          })}
        </RatingsList>
      </div>
    );
  };

  const { clearFilters } = props;

  return (
    <FiltersGroupContainer>
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <ClearFilterButton type="button" onClick={clearFilters}>
        Clear Filters
      </ClearFilterButton>
    </FiltersGroupContainer>
  );
};

export default FiltersGroup;
