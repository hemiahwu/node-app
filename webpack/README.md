## 1.安装全局webpack  sudo npm install -g webpack 

## 2.创建文件夹或找到文件夹路径 cd <filepath>

## 3.在文件路径下,初始化package.json  npm init --yes

## 4.创建一个入口文件, 例如: app.js

## 5.创建其他js或css文件,并将其模块化,在入口文件引入

## 6.js文件不需要依赖其他的加载器,但css等静态文件需要依赖加载器

## 7.css需要依赖css-loader!style-loader 安装npm install 

## 8.使用webpack配置文件 webpack.config.js

	### 8.1 主要属性: entry: 入口文件   例如: app.js
	### 8.2 		output: 出口文件   例如: bundle.js
	### 8.3         module: loaders / test: /\.css$/

## 9.配置package.json

	### 9.1 scripts: 
	### 9.2 build: "webpack"    npm run build 用于构建项目模块化

## 10.安装webpack-dev-server服务  用于项目运行与服务器
	### 10.1 scripts:
	### 10.2 start: "webpack-dev-server --entry ./入口文件路径 
					--output-filename ./出口文件"
	### 10.3 运行方式: npm start 用于开启webpack服务

