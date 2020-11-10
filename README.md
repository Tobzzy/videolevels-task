# Gallery App

A gallery application to display user pictures if they have any in their account and if not they can add new.

- live [Demo](http://videolevelstask-20201109132002-hostingbucket-dev.s3-website.eu-central-1.amazonaws.com/)

# Technologies

- Node.js v10.x or later
- Amplify CLI
- npm v5.x or later
- git v2.14.1 or later

## Installation

- Git clone repo [VideoLevels-Task](https://github.com/Tobzzy/videolevels-task)

#### Pre-requisite

```Bash
cd videolevels-task
amplify init
```

- it will prompt for the following

```Bash
Do you want to use an existing environment? Yes
Choose the environment you would like to use:
❯ dev
master
```

- select dev and click on enter
- run the following command to get the present resources

```Bash
amplify pull
```

- locate the file team-provider-info.json in amplify/backend
- you will need to provide an authentication key

```JavaScript
"categories": {
      "auth": {
        "videolevelstaskf1bd19a8": {}
      }
    }
```

- Use the package manager [yarn](https://yarnpkg.com/) to install app

```bash
yarn install
```

- To start client

```bash
yarn start
```

- Client will be live on [localhost](http://localhost:3000) port 3000

### Author

- Toyib Olamide Ahmed
- Email - (ahmedtoyib1@gmail.com)
- Reach out for collaboration lets build something awesome together

## License

[MIT](https://choosealicense.com/licenses/mit/)
