# Overview
This file is used to save common issues when working with React Native app.

# Issues

## Can not resolve module when using alias import

We may have alias module in the app, such as @redux, @hooks to simplify code when import these modules. Even we follow guildline to add config in tsconfig.js or babel.config.js we may face issues when start the app such as can not resole module @redux. 
First step, let check your module is added to these files, then restart your IDE. The module should be visible.
If it still not be resolved try run:

```bash
yarn cache clean

```
