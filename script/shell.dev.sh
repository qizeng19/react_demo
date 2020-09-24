echo $PATH
node -v
npm -v #检查编译环境
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
npm install 
npm run build #编译项目
cd build
tar -zcvf dist.tar.gz * #把所有文件压缩
tar -zxvf /root/.jenkins/workspace/test/build/dist.tar.gz -C /usr/share/nginx/html #压缩文件解压到nginx映射目录
cd /root/.jenkins/workspace/test
rm -R build #删除项目打包后的残留