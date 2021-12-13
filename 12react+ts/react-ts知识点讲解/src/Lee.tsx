import { ReactNode } from "react";

interface IProps {
  // 渲染子组件
  children?: ReactNode;
  msg: string;
}

// FC是FunctionComponent的简写
const Lee: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      {props?.children}
      {props.msg}
    </>
  );
};

export default Lee;
