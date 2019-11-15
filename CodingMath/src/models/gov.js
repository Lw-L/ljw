import {govList} from '@/services'

export default {
  // 命名空间
  namespace: 'gov',

  // 原始数据
  state: {
    list: []
  },

  // 异步操作
  effects: {
    *getGovList({payload}, {call, put}) {
      let res = yield call(govList, 1, 2);
      console.log('data...', res);
      yield put({
        type: 'changeList',
        payload: res.data.list
      })
    }
  },

  // 同步操作
  reducers: {
    changeList(state, {payload}){
      return {...state, list: payload}
    }
  }
};
