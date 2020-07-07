import React, { useState } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import ProductForm from "./ProductForm";
import { useRouteMatch } from "react-router-dom";

const handleProductClick = (product, props, setShowModal) => {
  //send this information to the productForm state
  setShowModal(true);
  props.sendToFormControl(product);
};
const handleSelectedProduct=(e,prod, setSelectedProducts, selectedProducts)=>{
  //First check if the product exists in the array...
  //You should only be able to delete once, so first check if it is selected..
  if(selectedProducts.filter(product=> product.title === prod.title).length > 0 && !e.target.checked){
    console.log("BINGO")
    let updatedSelection = selectedProducts.filter(product=> product.title !== prod.title)
    setSelectedProducts([...updatedSelection ])
  }
  else {
    setSelectedProducts(selectedProducts.concat(prod))
  }
  
  //`setSearches([…searches, query]);`
  //Use concat to update arrays in React Hooks
  
  console.log(e.target.checked)
}
const handleSearchForm = (props, term) => {
  props.filterFormControl(term);
};

//Called by getProducts()
const ProductTable = (product, props, setShowModal, standAlone, setSelectedProducts, selectedProducts) => {
  return (
    <Table.Row
      className="product-select"
      onClick={() => handleProductClick(product, props, setShowModal)}
      key={product.id}
    >
      {standAlone ? (
        <Table.Cell>
          <input
            type="checkbox"
            // checked={false}
            onChange={(e)=>handleSelectedProduct(e,product, setSelectedProducts, selectedProducts)}
          />
          {console.log(selectedProducts)}
        </Table.Cell>
      ) : null}
      <Table.Cell>{product.id}</Table.Cell>
      <Table.Cell>{product.title}</Table.Cell>
      <Table.Cell>{product.description}</Table.Cell>
    </Table.Row>
  );
};

const SearchListProducts = (props) => {
  let match = useRouteMatch();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [indexFrom, setIndexFrom] = useState(0);
  const [displayCount, setDisplayCount] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [standAlone, setStandAlone] = useState(
    match.path === "/account/RemoveProduct"
  );
  const getProducts = () => {
    return props.productData
      .filter((el) =>
        el.title.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
      .map((product) => ProductTable(product, props, setShowModal, standAlone, setSelectedProducts, selectedProducts));
  };
  let itemsLeft = getProducts().length;

  const nextPage = () => {
    if (indexFrom > itemsLeft) {
      setIndexFrom(0);
      setDisplayCount(10);
    } else {
      setIndexFrom(indexFrom + displayCount);
    }
  };

  const prevPage = () => {
    if (indexFrom === 0) {
      return null;
    }
    setIndexFrom(indexFrom - displayCount);
  };

  return (
    <>
      {!standAlone ? (
        showModal ? (
          <div className="add-product-form">
            <ProductForm setModal={setShowModal} />
          </div>
        ) : null
      ) : null}
      <div className="search-list-products">
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
            <a onClick={() => prevPage()}>&lt;</a>
            <a onClick={() => nextPage()}> &gt; </a>
            <input
              className="search-filter"
              onChange={(e) => handleSearchForm(props, e.target.value)}
              value={props.searchTerm}
              placeholder="filter current page"
            />
          </span>
          <Table className="table-style" basic="very" celled collapsing>
            <Table.Header>
              <Table.Row>
                {standAlone ? (
                  <Table.HeaderCell>Select</Table.HeaderCell>
                ) : null}
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {getProducts().splice(indexFrom, displayCount)
                .length === 0 ? (
                <Table.Row>
                  <Table.Cell>"No more results"</Table.Cell>
                </Table.Row>
              ) : (
                getProducts().splice(indexFrom, displayCount)
              )}
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
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
