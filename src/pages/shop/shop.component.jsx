import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, fetchCollectionsStart, isFetchingCollections }) => {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionOverviewContainer}
            // render={(props) => <CollectionOverviewWithSpinner isLoading={isFetchingCollections} {...props} />}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner isLoading={isFetchingCollections} {...props} />}
            />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    isFetchingCollections: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);