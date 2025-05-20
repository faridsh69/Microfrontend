Here I gathered all solutions to have micro-frontend

# 1- RSpack - fast, no need for build

#### cd 1-Rspack/host-app && npm install && npm run dev

current port is 3000

#### cd 1-Rspack/remote-app && npm install && npm run dev

current port is 3001
current remoteEntry.js file to check if exists: http://localhost:3001/remoteEntry.js

# 2- Vit - fast, need to be build then see result

#### cd 2-Vit/host-app && npm install && npm run dev

current port is 3020

#### cd 2-Vit/remote-app && npm install && npm run build && npm run preview -- --port 3002

current port is 3002
current remoteEntry.js file to check if exists: http://localhost:3002/assets/remoteEntry.js

# 3- Craco - most stable solution, not fast not slow also

#### cd 3-Craco/host-app && npm install && npm run dev

current port is 3030

#### cd 3-Craco/remote-app && npm install && npm run dev

current port is 3003
current remoteEntry.js file to check if exists: http://localhost:3003/remoteEntry.js
