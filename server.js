import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(__dirname, 'src')
const destinationDir = path.join(__dirname, 'dist')

fs.rmSync(destinationDir, { recursive: true, force: true })

function copyFiles(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true })
  }

  const items = fs.readdirSync(source)

  items.forEach((item) => {
    const srcPath = path.join(source, item)
    const destPath = path.join(destination, item)
    const stat = fs.lstatSync(srcPath)

    if (stat.isDirectory()) {
      copyFiles(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  })
}
copyFiles(sourceDir, destinationDir)

// // Create node http server
// import http from 'node:http'
// const server = http.createServer()

// // Route requests & responses
// // import { apiRouter } from './controllers/apiRouter.js'
// // apiRouter(server)


// // Run server with default
// const hostname = process.env.HOSTNAME || '0.0.0.0'
// const port = process.env.PORT || 3000
// // proxy to nginx 80 and 443 with certbot tls
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })
