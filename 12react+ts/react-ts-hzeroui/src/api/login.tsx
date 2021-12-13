import request from "../utils/request";

export interface IAdmin {
    name: string;
    password: string;
}

export const login = (admin: IAdmin) => {
  return request({
    url: "/admin/login",
    method: "POST",
    data: admin
  });
};
