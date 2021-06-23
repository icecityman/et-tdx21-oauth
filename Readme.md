# TRailheaDX '21 - OAuth flows

## Setup demo

- Open both folders

```
code Heroku
code Salesforce
```

- Create scratch org
  - Copy values (UN, PW, instanceUrl) from [sfdx force:user:display --json] to Heroku's .env file
  - Remove the last "/" from the URL
- Manually update ORG
  - Org > Setup > Security CORS > Check [Enable CORS for OAuth endpoints]
- Open Connected App
  - Org > Setup > App Manager > View TDX21_IandAM
  - Copy [Consumer Key] and [Consumer Secret]
  - Check [Enable for Device Flow]
- Open Heroku App and edit .env file
  - Update values
- Build Webserver project
- Run server `node ./src/server/_WEB.js`
- Open **https://localhost:4001**
  - DO NOT USE 127.0.0.1
