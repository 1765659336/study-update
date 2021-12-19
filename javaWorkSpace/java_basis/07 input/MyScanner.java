import java.util.Scanner;
public class MyScanner {
    public static void main(String[] args){
        /* 
            1. 导入包java.util.Scanner
            2. 创建Scanner类
            3. 接收用户的输入
        */
        Scanner scanner = new Scanner(System.in); // System.in 表示键盘输入
        System.out.println("请输入你的名字");
        String name = scanner.next(); // 接收用户的输入,程序才会继续执行
        System.out.println(name);
    }
}
