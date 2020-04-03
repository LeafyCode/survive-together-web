# SurviveTogether.org

This website is free for everyone to use. Please do not abuse it's capabilities. Currently, some areas get all the required items. There are deliveries, mobile stores, online stores, etc. But for some areas there's nothing. The main target of this website is to identify such areas and make sure everyone survives this crisis together. Learn more on our [About Us](https://survivetogether.org/about) page.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- [NodeJS](https://nodejs.org/en/)
- [Yarn (Please only use yarn)](https://classic.yarnpkg.com/en/docs/install)
- [Survive Together API up and running](https://github.com/LeafyCode/survive-together-api)

### Installing

- First create a `.env` in the project root and paste the content of the `.sample_env` file into it. You may change whatever you want but the default are fine for development. If you have changed the Hasura variables during the API setup, please change them here.
- Then install the node packages:

```shell script
yarn install
```

- Finally run the following to launch the app:

```shell script
yarn start
```

## Available script

- Whenever you change the database schema, run the following to refresh the types:

```shell script
yarn types:refresh
```

### And coding style tests

Make sure your editor supports `eslint` and all the files you submit are properly formatted according to the eslint rules.


## Built With

* [React](https://reactjs.org/) - The web framework used
* [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) - The react app generator
* [Typescript](https://www.typescriptlang.org/) - The guy saves us all
* [Bulma](https://bulma.io/) - The css framework

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Nipun Ravisara** - *Design and UI development* - [Ravisara](https://github.com/RavisaraDev)
* **Kalana Elapatha** - *Translations* - [kalanaelapatha](https://github.com/kalanaelapatha)
* **Navoda Thathsarani** - *Translations and content*
* **Pubudu Kodikara** - *Development* - [THpubs](https://github.com/thpubs/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the **GPL-3.0** License. This project should not be used by anyone for any profit. It's built to help people.

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

