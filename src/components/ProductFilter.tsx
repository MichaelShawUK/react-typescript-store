import ProductRange from "./ProductRange";

import StyledFilter from "../css/StyledFilter.ts";
import StyledProductFilter from "../css/StyledProductFilter.ts";

import FilterSVG from "../assets/svg/FilterSVG.tsx";

import products from "../data/products.ts";

import {
  FilterProperties,
  ProductFilterProps,
  ProductType,
  ProductRangeSortType,
} from "../types";

import { useEffect, useState, useRef, useContext } from "react";
import ProductSearchContext from "../context/ProductSearchContext.ts";

const ProductFilter = (props: ProductFilterProps) => {
  const [filter, setFilter] = useState<string[]>([props.category]);
  const [sort, setSort] = useState<ProductRangeSortType>("");

  const searchQuery = useContext(ProductSearchContext)[0];

  useEffect(() => {
    setFilter(searchQuery.split(" "));
  }, [searchQuery]);

  useEffect(() => {
    setFilter([props.category]);
  }, [props]);

  const filteredProducts = products.filter((product) => {
    if (filter.length === 1 && filter[0] === "") return true;
    const { category, brand, colour } = product;
    for (const criteria of filter) {
      if (criteria.toLowerCase() === "men" && category === "women")
        return false;
      if (
        category.toLowerCase().includes(criteria.toLowerCase()) ||
        brand.toLowerCase().includes(criteria.toLowerCase()) ||
        colour.toLowerCase().includes(criteria.toLowerCase())
      )
        continue;
      else return false;
    }
    return true;
  });

  const properties: FilterProperties = {
    category: {},
    brand: {},
    colour: {},
  };

  function calculateProperties(
    product: ProductType,
    property: "category" | "brand" | "colour"
  ): void {
    if (product[property] in properties[property])
      properties[property][product[property]]++;
    else properties[property][product[property]] = 1;
  }

  filteredProducts.forEach((product) => {
    calculateProperties(product, "category");
    calculateProperties(product, "brand");
    calculateProperties(product, "colour");
  });

  function displayFilters(property: "category" | "brand" | "colour") {
    const filterLowerCase = filter.map((criteria) => criteria.toLowerCase());

    return Object.entries(properties[property]).map(
      ([criteria, quantity], index) => (
        <li
          key={index}
          className={
            filterLowerCase.includes(criteria.toLowerCase()) ? "selected" : ""
          }
          onClick={toggleFilterCriteria}
        >{`${criteria} (${quantity})`}</li>
      )
    );
  }

  function toggleFilterCriteria(e: React.MouseEvent) {
    const criteria = (e.target as HTMLLIElement).textContent?.split(" (")[0];
    if (criteria && !filter.includes(criteria))
      setFilter([...filter, criteria]);
    if (criteria && filter.includes(criteria)) {
      const index = filter.indexOf(criteria);
      setFilter([...filter.slice(0, index), ...filter.slice(index + 1)]);
    }
  }

  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleClick(e: MouseEvent): void {
    if ((e.target as HTMLElement).tagName === "BUTTON") {
      dialogRef.current?.close();
      window.removeEventListener("click", handleClick);
    }
  }

  function showFilter(): void {
    dialogRef.current?.showModal();
    window.addEventListener("click", handleClick);
  }

  return (
    <>
      <div className="aggregation">
        <div className="filter-header mobile" onClick={showFilter}>
          <FilterSVG size={24} color="white" />
          FILTER
        </div>
        <select
          onChange={(e) => setSort(e.target.value as ProductRangeSortType)}
          defaultValue={""}
        >
          <option disabled value="">
            Sort Products
          </option>
          <option value="PRICE ASC">Price (Low-high)</option>
          <option value="PRICE DESC">Price (High-low)</option>
          <option value="NAME ASC">Name (A-Z)</option>
          <option value="NAME DESC">Name (Z-A)</option>
        </select>
      </div>
      <StyledProductFilter>
        <StyledFilter>
          <div className="filter-desktop">
            <div className="filter-header desktop">
              <FilterSVG size={24} color="white" />
              FILTER
            </div>
            <h3>Category</h3>
            <ul>{displayFilters("category")}</ul>
            <h3>Brand</h3>
            <ul>{displayFilters("brand")}</ul>
            <h3>Colour</h3>
            <ul>{displayFilters("colour")}</ul>
          </div>
        </StyledFilter>
        <ProductRange products={filteredProducts} sort={sort} />
        <dialog ref={dialogRef}>
          <div className="modal">
            <StyledFilter>
              <h3>Category</h3>
              <ul>{displayFilters("category")}</ul>
              <h3>Brand</h3>
              <ul>{displayFilters("brand")}</ul>
              <h3>Colour</h3>
              <ul>{displayFilters("colour")}</ul>
            </StyledFilter>
            <button>CLOSE</button>
            <button className="abs-btn">x</button>
          </div>
        </dialog>
      </StyledProductFilter>
    </>
  );
};

export default ProductFilter;
