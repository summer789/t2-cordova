
import { search } from '../services/example';

export default {

  namespace: 'example',

  state: {
    text: 'example',
    array: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *search({ payload }, { call }) {
      const data = yield call(search, { id: payload.id });
      console.log('data', data);
    },
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
