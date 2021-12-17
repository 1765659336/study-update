public class Test2 {
    public static void main(String[] args) {
        double num1 = 1.231231231;
        float num2 = 1.231231231F;
        System.out.println(num1); //1.231231231
        System.out.println(num2); //1.2312312 输出的值精度没有double高
    }
}
