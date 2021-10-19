import request from "../utils/request";
export const getUserList = (page: number = 1) => {
  return request({
    url: '/admin/user/list',
    params: {
      page,
    }
  })
};

export const deleteUserById = (userId: number) => {
  return request({
    // 字符串在前，拼上number，最终也是字符串
    url: '/admin/user/' + userId,
    method: "delete"
  })
}

export const updateUser = (userId: number ,user: any) => {
  return request({
    url: "/admin/user/" + userId,
    method: "put",
    data: user
  })
}

export const addUser = (user: any) => {
  return request({
    url: "/admin/user/add",
    method: "post",
    data: user
  })
}