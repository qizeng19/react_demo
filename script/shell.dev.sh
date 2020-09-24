 

#/usr/bin
# 当前镜像版本号
version="1.0.0";
# 镜像名
imageName="help-repair-dealer-test";
# 容器名
containerName="help-repair-dealer-test";
# jenkins服务器开放的的前端访问端口
port="80"
# 镜像中server暴露的端口号
exposePort="8081"
``
echo "--> yarn install"
cd ..
sudo npm install && sudo npm run build

echo "--> copy files shell.dev.sh"
sudo cp -rf Dockerfile ./build
cd ./build

echo "--> docker build"
sudo docker build -t "$imageName":"$version" .
sudo docker rm -f "$containerName" || echo 'continue'
sudo docker run -d -p "$port":"$exposePort" --privileged --restart=always --name "$containerName" "$imageName":"$version"