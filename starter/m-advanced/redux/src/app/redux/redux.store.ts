
import { InjectionToken } from '@angular/core';

import { createStore } from 'redux';
import { reducer } from './redux.reducer';

export function makeStore() {

    let debug = window.__REDUX_DEVTOOLS_EXTENSION__ as any;

    return createStore( reducer, debug && debug());
}

export const TripStore = new InjectionToken('Trip.store');

export const storeProvider = [
    { provide: TripStore, useFactory: makeStore }
];
