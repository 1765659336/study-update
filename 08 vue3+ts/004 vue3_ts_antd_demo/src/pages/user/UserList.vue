<template>
  <edit-user
    :user="table.user"
    :visible="table.isShowEditUser"
    @cancelEdit="cancelEdit"
    @changeUserDom="changeUserDom"
  ></edit-user>
  <add-user :visible="table.isShowAddUser" @cancelAdd="cancelAdd" @getUserByPage="getUserByPage"></add-user>
  <a-button @click="showAddUserModel" type="primary">新增用户</a-button>
  <a-table :data-source="table.dataList" rowKey="id" :pagination="table.pagination" @change="change">
    <a-table-column title="ID" data-index="id"/>
    <a-table-column title="用户名" data-index="name"></a-table-column>
    <a-table-column title="邮箱" data-index="email"/>
    <a-table-column title="电话号码" data-index="mobile"/>
    <a-table-column title="操作">
      <template #default="{record}">
        <a-space>
          <delete-user :user="record" @deleteUserDom="deleteUserDom"></delete-user>
          <a-button type="primary" @click="showEditUserModel(record)">编辑</a-button>
        </a-space>
      </template>
    </a-table-column>
  </a-table>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { getUserList } from "../../api/user";
import DeleteUser from "./DeleteUser.vue";
import EditUser from "./EidtUser.vue";
import AddUser from "./AddUser.vue";
interface IUser {
  id: number;
  email: string;
  mobile: string;
  name: string;
}

interface IPagination {
  position: "top" | "bottom" | "both";
  current: number;
  total: number;
  pageSize: number;
}

interface ITable {
  dataList: IUser[];
  user: IUser;
  isShowEditUser: boolean;
  isShowAddUser: boolean;
  pagination: IPagination;
}

export default defineComponent({
  components: {
    DeleteUser,
    EditUser,
    AddUser
  },
  setup() {
    let table = reactive<ITable>({
      dataList: [],
      user: {} as IUser,
      isShowEditUser: false,
      isShowAddUser: false,
      pagination: {
        position: "bottom",
        current: 1,
        total: 0,
        pageSize: 15
      }
    });
    onMounted(() => {
      getUserByPage();
    });
    const getUserByPage = (page: number = 1) => {
      getUserList(page)
        .then(response => {
          // console.log(response.data.data.dataList);
          const { dataList, currentPage, limit, totalCount } = response.data.data; 
          table.dataList = dataList;
          table.pagination.current = currentPage;
          table.pagination.pageSize = limit;
          table.pagination.total = totalCount;
        })
        .catch(() => {});
    };

    const deleteUserDom = (user: IUser) => {
      table.dataList = table.dataList.filter((item: IUser) => {
        return item.id !== user.id;
      });
    };

    const showEditUserModel = (user: IUser) => {
      table.user = user as IUser;
      table.isShowEditUser = true;
    };

    const changeUserDom = (user: IUser) => {
      table.dataList = table.dataList.map((item: IUser) => {
        if (item.id === user.id) {
          item = user;
        }
        return item;
      });
    };

    const cancelEdit = () => {
      table.isShowEditUser = false;
    };

    const cancelAdd = () => {
      table.isShowAddUser = false;
    };
    const showAddUserModel = () => {
      table.isShowAddUser = true;
    };
    const change = (pagination: {current:number,pageSize:number}) => {
      getUserByPage(pagination.current)
    }
    return {
      table,
      deleteUserDom,
      showEditUserModel,
      cancelEdit,
      changeUserDom,
      showAddUserModel,
      cancelAdd,
      getUserByPage,
      change
    };
  }
});
</script>

<style scoped>
</style>