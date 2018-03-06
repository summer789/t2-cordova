
##项目采用框架
- [dva](https://github.com/dvajs/dva)
- [antd mobile](https://mobile.ant.design/index-cn)
- [onsen ui](https://onsen.io/)
- [cordova](http://cordova.axuer.com/)

安装 Cordova iOS android 环境

`cordova platform add ios@4.5.4`

`cordova platform add android@6.2.3`

`cordova platform add browser`(可选)

`cordova prepare` 安装插件

进入 app 目录

安装依赖：`npm install`

打包：`npm run build`

运行app：`npm start`

虚拟机运行app

进入项目根目录

`cordova run android` 

`cordova run ios`

选择指定设备

`cordova run ios --target="iPhone-5"`

插件调用需真机环境下调试

##测试运行 ios
- app 目录下 `npm run build`
- 如果更改了代码,在命令行输入 `cordova prepare`
- 使用 xcode 打开 platforms/ios/[name].xcodeproj, `command+R` 运行 app

## 测试运行 android
- app 目录下 `npm run build`
- 如果更改了代码,在命令行输入 `cordova prepare`
- `cordova run android`

## 发布打包 android
- `cordova prepare`
- 修改 config.xml README.md(lenglianzhushou_v) 文件版本号
- `cordova build android --release`
