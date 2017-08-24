import request from '../utils/request'

export default {

    namespace: 'users',
    
    state: {
        list: [],
        page: 1,
        pageSize: 10,
    },
    
    effects: {
        *fetch({ payload: { page } }, { call, put }) {  // eslint-disable-line
            console.log(page)
            // call 只能调用function
            const { data } = yield call(request, `/api/users?_page=${1}&_limit=10`)
            yield put({
                type: 'save',
                payload: {
                    data                    
                }
            })
        },
    },
    
    reducers: {
        save(state, { type, payload: { data }}) {
            console.log(state)
            const ret = {...state, list: data, page: 2}
            console.log(ret)
            return ret
        },
    },    

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            // 配置时会调用setup这个方法

            // 监听访问 /users路由的方法
            history.listen(({ pathname }) => {
                if (pathname === '/users') {

                    // 发送一个fetch请求
                    dispatch({
                        type: 'fetch',
                        payload: {
                            page: 1
                        }
                    });
                    console.log('Hello')
                }
            });
        },
    },
}