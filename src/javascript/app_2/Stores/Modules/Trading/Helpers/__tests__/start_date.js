import { expect }                                         from 'chai';
import { isBefore }                                       from 'moment';
import React                                              from 'react';
import { buildForwardStartingConfig, isSessionAvailable } from '../start_date';

describe('start_date', () => {
    describe('buildForwardStartingConfig', () => {
        it('Returns empty object when forward_starting_options and forward_starting_dates are both empties', () => {
            const contract = {
                "barrier_category":"euro_atm",
                "barriers":0,
                "contract_category":"callput",
                "contract_category_display":"Up\/Down",
                "contract_display":"Higher",
                "contract_type":"CALL",
                "exchange_name":"FOREX",
                "expiry_type":"daily",
                "market":"forex",
                "max_contract_duration":"365d",
                "min_contract_duration":"1d",
                "sentiment":"up",
                "start_type":"spot",
                "submarket":"major_pairs",
                "underlying_symbol":"frxAUDJPY"
            };
            expect(buildForwardStartingConfig(contract, {})).to.eql({});
        });
    });
});
