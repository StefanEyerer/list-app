# ListApp

This is a simple List App that allows you to create all kinds of lists.
These lists can then be shared by creating a readonly public share link.

## Getting Started

### Prerequisites

This is a list of prerequisites, that need to be installed on your system:

- [NodeJS](https://nodejs.org/en/) - JavaScript runtime
- [NPM](https://www.npmjs.com/) - Node Package Manager

### Installing the dependencies

The following command installs all required dependencies:

```
npm install
```

### Building the application

The following command builds the backend component:

```
npx nx build api
```

The following command builds the web frontend component:

```
npx nx build web
```

### Starting the application

The following command starts the backend component:

```
npx nx serve api      (environment variables need to be configured)
```

The following command starts the web frontend component:

```
npx nx serve web      (environment variables need to be configured)
```

## Configuration

The application needs to be configured with environment variables in order to be used.

The following environment variables can be set for the backend component:

- DATABASE_URL: the mongodb database connection string
- GOOGLE_CLIENT_ID_WEB: the google oauth client id for the web frontend component

The following environment variables can be set for the web frontend component:

- NX_API_URL: the base url for the backend component
- NEXTAUTH_URL: the canonical url of the web frontend component for nextauth
- NEXTAUTH_SECRET: the secret to encrypt jwt tokens for nextauth
- GOOGLE_CLIENT_ID: the google oauth client id
- GOOGLE_CLIENT_SECRET: the google oauth client secret

## Author

- **Stefan Eyerer**
