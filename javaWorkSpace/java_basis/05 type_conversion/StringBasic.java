public class StringBasic {
    public static void main(String[] args){
        int a = 1;
        String str = a + "";
        System.out.println(str); //1
        System.out.println(Integer.parseInt("123")); //123
        System.out.println(Double.parseDouble("123.1")); //123.1
        System.out.println(Float.parseFloat("1F"));//1.0
        System.out.println(Short.parseShort("123"));//123
        System.out.println(Long.parseLong("123"));//123
        System.out.println(Boolean.parseBoolean("true"));//true
        System.out.println(Byte.parseByte("123"));//123
    }

}