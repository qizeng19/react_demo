FROM 220.167.101.61:5000/fyx/node-baseweb:1.2
WORKDIR /app
COPY . /app
RUN ls
EXPOSE 8081
CMD [ "node", "app.js","--no-daemon"]
