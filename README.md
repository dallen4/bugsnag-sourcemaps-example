# bugsnag-sourcemaps-example

Setup:
- clone
- run `yarn install && yarn setup`

To run locally:
- create `.env.build` file with `NODE_ENV`, `API_URI`, and `BUGSNAG_API_KEY` (the only one implemented is `BUGSNAG_API_KEY` but wanted a semi-realistic config)
- `yarn start`

Deploy:
- you will need a Now account to sign into the `now` cli and deploy the project
- you will need a Bugsnag account and have to have created a project then replace the value in `now.testing.json` config for `BUGSNAG_API_KEY` (do not commit, look into `now` secrets for secure implementations)
- run `yarn deploy`
