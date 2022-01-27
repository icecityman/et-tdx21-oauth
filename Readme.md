# TrailheaDX '21 - OAuth flows

This repo is part of a session I did on Trailhead DX '21. That session can be found here:

There were 2 sessions (links below) which were basically the same but delivered twice in case attendees had a conflict.

1. https://trailblazer.salesforce.com/myagenda?class=5864b3752c614270aea5823a07e356ac&eventId=a1Q4V000021f9sfUAA#/session/a2q4V000002BSXhQAO

2. https://trailblazer.salesforce.com/myagenda?class=5864b3752c614270aea5823a07e356ac&eventId=a1Q4V000021f9sfUAA#/session/a2q4V000002BSXTQA4

There is also a direct link to the second recording

https://play.vidyard.com/DUVaErx7xZh43UnYkGNCv6
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
- Build Webserver project using `lwc-services build -m development`
- Run server `node ./src/server/_WEB.js`
- Open **https://localhost:4001**
  - DO NOT USE 127.0.0.1
