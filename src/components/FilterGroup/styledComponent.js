import styled from "styled-components";

export const FiltersGroupContainer = styled.div`
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    width: 25%;
    max-width: 280px;
    min-width: 240px;
    margin-top: 48px;
    flex-shrink: 0;
  }
`;

// Search
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f5f9;
  border-radius: 8px;
  padding: 8px 16px;
`;

export const SearchInput = styled.input`
  background-color: #f1f5f9;
  color: #0f172a;
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  flex-grow: 1;
`;

// Category
export const CategoryHeading = styled.h1`
  color: #12022f;
  font-size: 18px;
  font-weight: 700;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const CategoriesList = styled.ul`
  padding-left: 0;
`;

export const CategoryItem = styled.li`
  list-style-type: none;
  margin-top: 16px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
  p {
    color: ${(props) => (props.$isActive ? "#0967d2" : "#64748b")};

    font-weight: ${(props) => props.$isActive && "bold"};
    font-size: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

// Rating
export const RatingHeading = styled.h1`
  color: #12022f;
  font-size: 18px;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 18px;
`;

export const RatingsList = styled.ul`
  padding-left: 0;
`;

export const RatingItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
  p {
    color: ${(props) => (props.$isActive ? "#0967d2" : "#64748b")};
    font-size: 16px;
    font-weight: ${(props) => props.$isActive && "bold"};
    margin-left: 10px;
    margin-bottom: 0;
    margin-top: 0;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      margin-left: 14px;
    }
  }
`;

export const RatingImage = styled.img`
  max-width: 152px;
  height: 20px;
  @media screen and (min-width: 768px) {
    height: 24px;
  }
`;

// Clear Filter Button
export const ClearFilterButton = styled.button`
  background-color: #ffffff;
  color: #0967d2;
  font-size: 10px;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid #0967d2;
  padding: 8px 12px;
  margin-top: 16px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 8px 20px;
    margin-top: 32px;
  }
`;
