import React, { useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import { deleteProducts } from "../services/submitProductDelete";
import ProductForm from "./ProductForm";
import { useRouteMatch } from "react-router-dom";

//Can only be called if not standAlone mode
const handleProductClick = (product, props, setShowModal) => {
  //send this information to the productForm state
  setShowModal(true);
  props.sendToFormControl(product);
};

//Only used in StandAlone mode
const handleDeleteSelected = (selectedProducts, props, setSelectedProducts) => {
  //Creates an array of selected product ID's
  let idArray = selectedProducts.map((prod) => prod.id);
  if (idArray.length > 0) {
    //Open confirm window
    if (
      window.confirm(
        "Are you sure you want to delete \nall the selected products"
      )
    ) {
      //Sends array of ID's to backend for deletion
      deleteProducts(idArray);
      //Remove from the Redux Store
      selectedProducts.forEach((product) =>
        props.removeOldProductFromStore(product)
      );
      //Rebuild the displayed Products
      let updatedProductArray = props.productData.filter((product) => {
        return !idArray.includes(product.id);
      });
      props.updateProductStore(updatedProductArray.flat());
      //Reset the selected products array
      setSelectedProducts([]);
    } else {
      console.log("You cancelled");
    }
  } else {
    alert("You need to select first");
  }
};

const handleSelectedProduct = (
  e,
  prod,
  setSelectedProducts,
  selectedProducts
) => {
  //First check if the product exists in the array...
  //You should only be able to delete once, so first check if it is selected..
  if (
    selectedProducts.filter((product) => product.title === prod.title).length >
      0 &&
    !e.target.checked
  ) {
    let updatedSelection = selectedProducts.filter(
      (product) => product.title !== prod.title
    );
    setSelectedProducts([...updatedSelection]);
  } else {
    setSelectedProducts([...selectedProducts, prod]);
  }
};
const handleSearchForm = (props, term) => {
  props.filterFormControl(term);
};

//Called by getProducts() to build the table with the productData
const ProductTable = (
  product,
  props,
  setShowModal,
  standAlone,
  setSelectedProducts,
  selectedProducts
) => {
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
            onChange={(e) =>
              handleSelectedProduct(
                e,
                product,
                setSelectedProducts,
                selectedProducts
              )
            }
          />
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
  //This allows the component to be used in different settings depending on the URL - it is also used in the admin menu without URL
  const [standAlone, setStandAlone] = useState(
    match.path === "/account/RemoveProduct"
  );
  //Builds the product table with the products filtered by string
  const getProducts = () => {
    return props.productData
      .filter((el) =>
        el.title.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
      .map((product) =>
        ProductTable(
          product,
          props,
          setShowModal,
          standAlone,
          setSelectedProducts,
          selectedProducts
        )
      );
  };
  //Allows for pagination
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
            {standAlone ? (
              <a
                className="delete-btn"
                onClick={() =>
                  handleDeleteSelected(
                    selectedProducts,
                    props,
                    setSelectedProducts
                  )
                }
              >
                Delete Selected
              </a>
            ) : null}
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
              {getProducts().splice(indexFrom, displayCount).length === 0 ? (
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
    updateProductStore: (object) => {
      dispatch({ type: "UPDATE_PRODUCT_STORE", payload: object });
    },
    sendToFormControl: (object) => {
      dispatch({ type: "PRODUCT_FOR_EDIT", payload: object });
    },
    filterFormControl: (object) => {
      dispatch({ type: "SEARCH_TERM_CONTROL", payload: object });
    },
    removeOldProductFromStore: (object) => {
      dispatch({ type: "REMOVE_BY_ID", payload: object });
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
