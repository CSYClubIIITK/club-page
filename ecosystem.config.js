module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      user: "cyberclub",
      host: "192.168.136.129",
      ref: "origin/main",
      repo: "git@Github.com:CSYClubIIITK/CSYClub-website.git",
      path: "/home/cyberclub",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
