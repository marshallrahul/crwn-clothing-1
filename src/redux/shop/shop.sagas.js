import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.action";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export function* fetchCollectionsStartAsync() {
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap))
        
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsStartAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}