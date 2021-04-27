import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "../collection-overview/collection-overview.component";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;