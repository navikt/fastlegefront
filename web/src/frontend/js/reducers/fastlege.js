import * as actiontyper from '../actions/actiontyper';

const initiellState = {
    harSoktBruker: false,
    henter: false,
    ikkeFunnet: false,
    hentingFeilet: false,
    data: {},
};

export default function fastlege(state = initiellState, action) {
    switch (action.type) {
        case actiontyper.HENT_FASTLEGE_FEILET: {
            return Object.assign({}, state, {
                data: {},
                henter: false,
                hentingFeilet: true,
            });
        }
        case actiontyper.HENTER_FASTLEGE: {
            return Object.assign({}, state, {
                data: {},
                henter: true,
                hentingFeilet: false,
                harSoktBruker: true,
            });
        }
        case actiontyper.FASTLEGE_IKKE_FUNNET: {
            return Object.assign({}, state, {
                henter: false,
                hentingFeilet: false,
                ikkeFunnet: true,
            });
        }
        case actiontyper.FASTLEGE_HENTET: {
            return Object.assign({}, state, {
                data: action.data,
                henter: false,
                hentingFeilet: false,
            });
        }
        default: {
            return state;
        }
    }
}