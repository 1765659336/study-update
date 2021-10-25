import { ITodoData } from "./src/typings";
import TodoEvent from "./src/TodoEvent";

(function(document) {
  const oInput: HTMLInputElement = document.querySelector("input");
  const oAddBtn: HTMLButtonElement = document.querySelector("button");
  const oTodoList: HTMLDivElement = document.querySelector(".todo-list");
  const todoData: ITodoData[] = [
    {
      id: 1,
      content: "123",
      done: true
    },
    {
      id: 2,
      content: "123",
      done: false
    },
    {
      id: 3,
      content: "123",
      done: true
    }
  ];

  const todoEvent: TodoEvent = new TodoEvent(todoData);

  // 入口执行函数
  const init = (): void => {
    bindEvent();
  };

  const bindEvent = (): void => {
    // addEventListener第三个参数boolean类型，默认值是false，意思是冒泡执行，为true时，为捕获执行
    oAddBtn.addEventListener("click", handleAddBtnClick, false);
    oTodoList.addEventListener("click", handleListClick, false);
  };

  const handleAddBtnClick = (): void => {
    todoEvent.addTodo({ id: 4, content: "123", done: true });
    /* 数组复杂数据类型，传递给函数，依然保持引用关系，在函数中修改也会修改原始的值 */
    console.log(todoData);
  };

  const handleListClick = (e: MouseEvent): void => {
    /* tar编辑器任务tar是一个any类型,我们必须告诉编辑器tar是一个HTMLElement，不然找不到tagName */
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName;
    // console.log(tagName);
    if (tagName === "INPUT" || tagName === "DIV") {
      switch (tagName) {
        case "INPUT":
          break;
        case "DIV":
          break;
        default:
          break;
      }
    }
  };

  init();
})(document);