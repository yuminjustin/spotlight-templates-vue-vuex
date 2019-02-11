## spotlight-templates-vue-vuex
spotlight scaffold template for vue+vuex<br>

## Use：

     spotlight vuex my-project

     cd my-project

     npm install

     npm run dev

     npm run build

此模板是vue环境<br>
This template is base on webpack, support for vuejs<br>

1.配置在build/config.js 当中；<br>
  Configures in build/config.js <br><br>

2.vue + vue-router + vuex + [element-ui](http://element.eleme.io/)；<br><br>

<font color="green">如果使用的history路由需要做以下操作：</font><br/>
<font color="orange">1)、在config.js中需要将dev和build的html5Router属性设置成true;</font><br/>
<font color="red">2)、gulp需要全局安装;</font><br/>
<font color="cyan">
   3)、此模板打包已支持Apache, 你只需要确认你的Apache开启rewrite功能(ngix 需要另外配置，如下);
</font><br/>

    location / {
        try_files $uri $uri/ /index.html;
    }

3.Upgrade to webpack4

4.Upgrade gulp

enjoy!
