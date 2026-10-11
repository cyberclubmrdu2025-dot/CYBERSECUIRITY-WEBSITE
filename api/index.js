import { createApp } from '../server/app.js'

let appInstance = null

export default function handler(req, res) {
  if (!appInstance) {
    appInstance = createApp()
  }
  return appInstance(req, res)
}
