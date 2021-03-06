import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPortfolio (action) {
    if( action.type === 'FETCH_PORTFOLIO' ) { 
        try{
            const response = yield axios.get(`/api/portfolio`)
            yield put({ type: 'SET_PORTFOLIO', payload: response.data})
        } catch( error ) {
            console.log('error with the GET request for the FETCH_PORTFOLIO in portfolio.saga', error);
        }
    }
}

function* updatePortfolio (action) {
    if( action.type === 'UPDATE_PORTFOLIO' ) {
        try{
            yield axios.put(`/api/portfolio/update`, action.payload)
        } catch( error ) {
            console.log('error with the PORTFOLIO_UPDATE in portfolio.saga', error);
        }
    }
}

function* portfolioSaga() {
  yield takeLatest('FETCH_PORTFOLIO', getPortfolio);
  yield takeLatest('UPDATE_PORTFOLIO', updatePortfolio);
}

export default portfolioSaga;
