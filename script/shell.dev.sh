#!/usr/bin/env node
node -v
 
npm -v 
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
npm install 
 
npm run build 
cd build
 
tar -zcvf dist.tar.gz * 
 
tar -zxvf /root/.jenkins/workspace/react_demo/build/dist.tar.gz -C /usr/share/nginx/html 
cd /root/.jenkins/workspace/react_demo
rm -R build 