<h1>next-nest-monorepo</h1>

## Overview

The repo consists of 3 folders: `client` (for FE app), `server` (for BE app) and `shared` (for shared code and types). Every subproject is written in TypeScript and has its own `tsconfig.json` and `package.json`. The root folder aims to pin everything up together in order to simplify dev and build process.

### Quick start

1. Clone / download the repo
2. `cd next-nest-monorepo && yarn`
3. `yarn dev` to start development (see below all available commands)
4. `yarn prod` to build prod version and start it

### Commands

| Command           | Description                                                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn dev`        | Starts concurrently Next dev server (on port 3000) and runs Nest development mode (on port 9000).  |
| `yarn prod`      | Builds shared module, then builds and runs BE app and then builds FE app and starts it. FE listens on port `3000`, API on `9000`                                                                                                                                                                       |
| `yarn lint`       | TBD                                                                                          |
| `yarn test`       | TBD                                                                                                                                                                                                                                     |

### Installing dependencies

Thanks to [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to install dependencies you should just run `yarn` being in the root of the project. Shared dependencies should be put in `package.json` of `shared` folder (as `shared` subproject is set up as internal dependency of both `client` and `server`).

### Adding dependencies

In order to add dependency which is:

- client-specific: `cd client && yarn add yourDep`
- server-specific: `cd server && yarn add yourDep`
- shared between client and server: `cd shared && yarn add yourDep`

### Git hooks

TBD but should work like below:

By default 2 hooks are set up:

- on every commit `prettier` fixes the code style of every staged file
- on every push `yarn test` and `yarn lint` is triggered to prevent buggy code on your remote

You can always modify it in `package.json -> husky`

### Styling

By default `sass|scss` is supported with or without CSS Modules.

To use CSS Modules create `YourComponent.module.scss` and import in component:

```
import styles from './YourComponent.module.scss';
...
<div className={styles.yourClass} />

```

To use global styles create `yourGlobalStyles.scss` file and then import it:

```
import './yourGlobalStyles.scss';
```

### Aliases

Aliases are configured. You can use absolute paths, like:

```
import something from '@shared/utils';
import something from '@client/utils';
import something from '@server/utils';
```

**IMPORTANT NOTE**

Please add this to VS config settings in order to make intellisense working with aliases config:

`"eslint.workingDirectories": ["client", "server", "shared"]`

---

### Deployment

`Dockerfile` is defined so you can build an image and run container. It will trigger `yarn prod` so FE app will run on port 3000, BE on 9000 (you should publish exposed ports like so: `docker run -p 3000:3000 -p 9000:9000 ...`)
