import styled from 'styled-components'
import { Main } from '../../style';
export const SortAndFilterButtons = ({ handleSort }) => {


  return (
    <Main className="sortButtons" onClick={handleSort}>
      <button className="sortByTitleAsc">sortByTitleAsc</button>
      <button className="sortByTitleDesc">sortByTitleDesc</button>
      <button className="sortByPriceAsc">sortByPriceAsc</button>
      <button className="sortByPriceDesc">sortByPriceDesc</button>
    </Main>    
  );
};
