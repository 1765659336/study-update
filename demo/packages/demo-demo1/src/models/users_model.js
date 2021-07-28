const UserModel = {
  namespace: 'users',
  state: {},
  reducers: {
    getList(){
      const data = {data: [
        {
          key: '1',
          name: 'Jim',
          age: 12,
          address: 'adasd',
          tags: ['loser']
        },
        {
          key: '2',
          name: 'Jimweq',
          age: 44,
          address: 'adadsadsd',
          tags:['loser','sdada']
        },
        {
          key: '3',
          name: 'Jimweqeq',
          age: 22,
          address: 'adassdad',
          tags:['loser']
        }
      ]}
      return data
    }
  },
  effect: {
    
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen( ( location ) => {
        if(location.pathname === '/demo1/users'){
          dispatch({
            type:'getList',
          })
        }
      })
    }
  }
}

export default UserModel;