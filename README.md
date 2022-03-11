# Olive Helps Onboarding Loop Assets

## Introduction

This static asset repository was created to provide a way to store static assets that are easily updated and servable

## Development

### Creating a new version

Creating a new version of the onboarding assets is an easy process. You can either update the assets in place for quick modifications and bugfixes, or you can create a new `v` version of the assets to provide backwards compatibility with older versions of Olive Helps.

To create a new version...
* Duplicate the most recent `v*` folder and increment the number value on the new folder
* Make any modifications to the image assets in the folder, and make any text changes in the `config.json` file.
* Create a PR and merge it into master.
* In `desktop/core`, update the `OnboardingVersion` constant in `internal/config/config.go` and `ONBOARDING_VERSION` in `./Makefile` to the new `v*` version.
* Deploy Olive Helps as normal

### Serving for local development

We have added a local dev server to facilitate easier confirmation of local assets. This is not intended to be deployed or run server-side in any way.

* Run `npm start`
* Modify `internal/loop/core/onboarding/onboarding.go` to use the new `http://localhost:2000/` server.
* Run Olive Help with your local `core` changes.

NOTE: Make sure not to commit this `localhost` change. If will break the bundled application.
