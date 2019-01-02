# huawei-rebooter
Reboots a Huawei router by simulating a real Chrome browser using Puppeteer.  
Works with:  
- E5186s-22a

### Usage

1. Install [Node.js](https://nodejs.org) and npm
2. Clone this repository
3. Run `npm install` in the same directory from the command line
4. Edit config.json and change your router URL, username and password.  
Defaults:

```json
"url": "http://192.168.0.1",
"username": "admin",
"password": "admin",
```

5. Run `npm start` in the same directory from the command line
6. Router should reboot
7. ???
8. PROFIT

### Should I use this?
No. There are probably way cleaner and less behemoth ways of rebooting the router. This project was created just for fun to try out Puppeteer.  
**But does it work?** It should, yes, but has only been tested with one model.

**Installing as root?**
You shouldn't but: `npm install --unsafe-perm=true --allow-root`

### License
MIT
