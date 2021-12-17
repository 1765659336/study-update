public class Test {
    public static void main(String[] args){
        // 在内存中分配一个地址空间，地址索引就是变量名，地址空间的值就是变量的值
        int a = 1;
        int b = 2;
        b = 3;
        System.out.println(a);
        System.out.println(b);
    }
}
