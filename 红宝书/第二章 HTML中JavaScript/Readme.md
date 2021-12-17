## HTML中的JavaScript

### script标签

script标签有8个属性

1. src：可选。表示包含要执行的外部文件
2. type：代替 language，表示代码块中脚本语言的内容类型。（也称MIME类型）。按照惯例，这个值始终都是“text/javascript"。不过给type 属性这个值有可能导致脚本被忽略，从而导致对应的js代码不会被执行。如果这个值是module，那么js代码会被当成es6的代码
3. 