#!/usr/bin/env node
node -v
# 检查编译环境
npm -v 
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
npm install 
# 编译项目
npm run build 
cd build
# 把所有文件压缩
tar -zcvf dist.tar.gz * 
# 压缩文件解压到nginx映射目录
tar -zxvf /root/.jenkins/workspace/react_demo/build/dist.tar.gz -C /usr/share/nginx/html 
cd /root/.jenkins/workspace/react_demo
# 删除项目打包后的残留
rm -R build 
