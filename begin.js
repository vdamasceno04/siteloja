/* Start api and website */

require('dotenv').config()
const { spawn } = require('child_process')
const kill_port = require('kill-port')

let cmd

kill_port(process.env.API_PORT)

if (process.platform === 'win32'){
    cmd = 'npm.cmd'
} else {
    cmd = 'npm'
}

spawn(cmd, ['start'], {stdio: 'inherit'})

process.stdout.on('data', data => {
    console.log(`${data}`)
})

process.stderr.on('data', data => {
    console.log(`${data}`)
})

process.on('error', (error) => {
    console.log(`${error.message}`)
})

process.on('close', code => {
    console.log(`API closed: ${code}`)
})

import('open').then((openModule) => {
    openModule.default('site/initialPage.html')
      .then(() => {
        console.log('Site opened successfully!')
      })
      .catch((error) => {
        console.error('Failed to open site:', error)
      })
  })