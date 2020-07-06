import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Image, Table } from "semantic-ui-react";

const handleProductClick = (product, props) => {
  //send this information to the productForm state
  props.sendToFormControl(product);
};

const handleSearchForm = (props, term) => {
  props.filterFormControl(term);
};

const ProductTable = (product, props) => {
  return (
    <Table.Row className="product-select" onClick={()=>handleProductClick(product, props)} key={product.id}>
      <Table.Cell>{product.id}</Table.Cell>
      <Table.Cell>{product.title}</Table.Cell>
      <Table.Cell>{product.description}</Table.Cell>
    </Table.Row>
  );
};

const SearchListProducts = (props) => {
  const [indexFrom, setIndexFrom] = useState(0);
  const [displayCount, setDisplayCount] = useState(10);
  
  const getProducts = () => {
   return props.productData
      .filter((el) =>
        el.title.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
      .map((product) => ProductTable(product, props));
  };
  let itemsLeft = getProducts().length

  const nextPage=()=>{
	if(indexFrom > itemsLeft){
		setIndexFrom(0)
		setDisplayCount(10)
	}
	else {
		setIndexFrom(indexFrom + displayCount)
	}
  }

  const prevPage=()=>{
	if(indexFrom === 0){
		return null
	}
	setIndexFrom(indexFrom - displayCount)
  }

  return (
    <div className="search-list-products">
      <div className="search">
        <input
          onChange={(e) => handleSearchForm(props, e.target.value)}
          value={props.searchTerm}
          placeholder="filter current page"
        />
      </div>
      <div className="results">
        <span>
          results per page :
          <select
            name="displayCount"
            id="display-count"
            onChange={(e) => setDisplayCount(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <a
            onClick={()=>prevPage()}
          >
            &lt;
          </a>
          <a onClick={()=>nextPage()}> &gt; </a>
        </span>
        <Table className="table-style" basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{getProducts().splice(indexFrom, displayCount).length == 0 ? "No more results" : 
		  getProducts().splice(indexFrom, displayCount) }</Table.Body>
        </Table>
      </div>
    </div>
  );
};
function mdp(dispatch) {
  return {
    sendToFormControl: (object) => {
      dispatch({ type: "PRODUCT_FOR_EDIT", payload: object });
    },
    filterFormControl: (object) => {
      dispatch({ type: "SEARCH_TERM_CONTROL", payload: object });
    },
  };
}

function msp(state) {
  return {
    productData: state.productData,
    searchTerm: state.searchTerm,
  };
}

export default connect(msp, mdp)(SearchListProducts);
