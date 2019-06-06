
import { InjectionToken } from '@angular/core';

import { createStore } from 'redux';
import { reducer } from './redux.reducer';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

export function makeStore() {

    return createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__() );
}

export const TripStore = new InjectionToken('Trip.store');

export const storeProvider = [
    { provide: TripStore, useFactory: makeStore }
];
