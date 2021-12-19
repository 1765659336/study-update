public class Practice {
    public static void main(String[] args){
        // Practice1
        int i = 1;
        /* 
            i = i++的执行过程
            1. 将 i++ 的值赋值给i
            2. i++ 先赋值再加1
                2.1 将i = 1 的值作为表达式的值参与运算
                2.2 发现右边的表达式没有其它的值了,则进行加1的操作,此时i 加了1,等于2
                2.3 i = i++ 右边表示式执行完毕,将右边的值1进行赋值,i又等于1
        */
        i = i++;
        System.out.println(i); //2

        // Practice2
        int j = 1;
        /* 
            j = ++j的执行过程
            1. 将 ++j 的值赋值给j
            2. j++ 先加1再赋值,此时j的值为2
                2.1 将j = 2 的值作为表达式的值参与运算
                2.2 发现右边的表达式没有其它的值了
                2.3 j = ++j 右边表示式执行完毕,将右边的值2进行赋值,j还是等于2
        */
        j = ++j;
        System.out.println(j); //2

        // Practice3
        int i1 = 10;
        int i2 = 20;
        int i3 = i1++;
        System.out.println(i1); // 11
        System.out.println(i2); // 20
        i3 = --i2;
        System.out.println(i3); // 19
        System.out.println(i2); // 19
    }
}
