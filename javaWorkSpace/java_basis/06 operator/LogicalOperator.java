public class LogicalOperator {
    public static void main(String[] args){
        // a^b 逻辑疑惑,两个boolean值相同则为false,不同则为true
        boolean atrue = true;
        boolean afalse = false;
        boolean btrue = true;
        boolean bfalse = false;
        System.out.println(atrue^btrue); //false
        System.out.println(afalse^btrue); //true
        System.out.println(atrue^bfalse); //true
        System.out.println(afalse^bfalse); //false
    }
}
