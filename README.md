# bugsnag-sourcemaps-example

Setup:
- clone
- run `yarn install && yarn setup`

To run locally:
- create `.env.build` file with `NODE_ENV`, `API_URI`, `COOKIE_DOMAIN`, and `BUGSNAG_API_KEY` (the only one implemented is `BUGSNAG_API_KEY` but wanted a semi-realistic config)
- `yarn start`

Deploy:
- you will need a Now account to sign into the `now` cli and deploy the project
- run `yarn deploy`
