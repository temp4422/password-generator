import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(__dirname, 'src')
const destinationDir = path.join(__dirname, 'dist')

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
console.log(`Files copied from ${sourceDir} to ${destinationDir}`)
