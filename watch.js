import fs from 'fs'
import { exec } from 'child_process'

fs.watch('./src/', { recursive: true }, (event, filename) => {
  console.log(`Change detected in ${filename}. Running app.js...`)
  exec('node app.js')
  exec('npx @tailwindcss/cli -i ./src/style.css -o ./dist/style.css --watch')

  // If need proper error, stdout, stderr handling
  // exec('node app.js', (error, stdout, stderr) => {
  //   if (error) return console.error(`Error: ${error.message}`)
  //   if (stderr) return console.error(`stderr: ${stderr}`)
  //   console.log(stdout)
  // })
})
