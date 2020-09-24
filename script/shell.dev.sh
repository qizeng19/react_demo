echo $PATH
node -v
npm -v
npm install
echo pwd
npm run build
cd build
tar -zcvf dist.tar.gz *
tar -zxvf /root/.jenkins/workspace/react_demo/build/dist.tar.gz -C /usr/share/nginx/html
cd /root/.jenkins/workspace/react_demo
# rm -R build