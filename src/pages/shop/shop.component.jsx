import React from "react";
import "./shop.styles.scss";
import { connect } from "react-redux";
import {selectShopCollection} from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

const ShopPage = ({collections}) => (
  <div className="shop-page">
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
    /
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection,
});

export default connect(mapStateToProps)(ShopPage);
