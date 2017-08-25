import request from '../utils/request'

export default {

    namespace: 'users',
    
    state: {
        list: [],
        page: 1,
        pageSize: 10,
        total: 0
    },
    
    effects: {
        *fetch({ payload: { page } }, { call, put }) {  // eslint-disable-line

            // call 只能调用function
            const { data, error } = yield call(request, `/api/users?_page=${page}&_limit=10`)                        

            console.log(`=============>`)
            console.log(error)
            console.log(data)

            yield put({
                type: 'save',
                payload: {
                    data,
                    page
                }
            })
        },
    },
    
    reducers: {
        save(state, { type, payload: { data }}) {

            console.log(`--------------------------`)
            console.log(state)
            console.log(data)
            console.log(state.list)
            const newList = [...state.list, ...data]
            const ret = {...state, list: newList}

            console.log(state.list)
            console.log(newList)

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
                }
            });
        },
    },
}