# hci-vue
hci project with vue
(Optimized for mobile)

http://35.194.116.240:8080

### Requirements (Linux)

- node & npm
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

- mongoDB
```
sudo apt-get install mongodb-server mongodb-clients
```

- pm2
```
npm install pm2 -g
```

### Build

```
/frontend
npm install
npm run build

/backend
npm install 
pm2 start bin/www --watch (for background running)
```

=>http://localhost:8080

