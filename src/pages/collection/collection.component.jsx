import React from 'react';
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.style.scss";

class CollectionPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { collection } = this.props;
        const { title, items } = collection;
        return (
            <div className="collection-page">
                <div className="title">{title}</div>
                <div className="items">
                    {
                        items.map((item) => <CollectionItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);