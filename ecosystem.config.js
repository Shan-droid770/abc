module.exports = {
  apps: [
    {
      name: "whatsapp-bot",
      script: "start.js",   // change if your main file is different
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "420M",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}
