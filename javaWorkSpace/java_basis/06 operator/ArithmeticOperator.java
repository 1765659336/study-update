public class ArithmeticOperator {
    public static void main(String[] args) {
        /*
         * | + | 正号 |
         * | ---- | ------------- |
         * | - | 负号 |
         * | + | 加 |
         * | - | 减 |
         * | * | 乘 |
         * | / | 除 |
         * | % | 取模(取余) |
         * | i++ | 先赋值,再自增 |
         * | ++i | 先自增,再赋值 |
         * | i-- | 先赋值,再自减 |
         * | --i | 先自减,再赋值 |
         * | + | 字符串拼接 |
         */
        int num1 = 9;
        System.out.println(num1 % 2); // 1
        // 单独使用
        int num2 = 1;
        int num3 = 1;
        num2++;
        ++num2;
        System.out.println(num2); // 3
        num3--;
        --num3;
        System.out.println(num3); // -1
        // 作为表达式使用
        int num4 = 1;
        int num5 = 1;
        int num6 = num4++;
        int num7 = ++num5;
        System.out.println(num6 + "-" + num7); // 1 - 2
        System.out.println(num4 + "-" + num5); // 2 - 2
    }
}
