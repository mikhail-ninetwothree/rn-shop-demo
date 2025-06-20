This is a [**React Native**](https://reactnative.dev) Boilerplate for the project setup, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).
The Boilerplate is built using Clean Architecture approach.

Main features included:

- [Navigation](https://reactnavigation.org/)
- [Theming and base components](https://reactnativeelements.com/)
- [Localization](https://www.npmjs.com/package/react-native-i18n)
- [Encrypted Storage](https://www.npmjs.com/package/react-native-encrypted-storage)
- Networking ([axios](https://axios-http.com/) + [react-query](https://tanstack.com/query/latest/docs/framework/react/overview))
- [BootSplash](https://github.com/zoontek/react-native-bootsplash)
- [Flavoring](https://www.npmjs.com/package/react-native-config)

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone the Boilerplate Repository

```bash
git clone git@bitbucket.org:nine-two-three/react-native-boilerplate.git <new-project-name>
cd <new-project-name>
```

## Step 2: Remove Boilerplate Git History 

Firstly, remove the Boilerplate git and then add a new remote Git repository.

```bash
rm -rf .git

# Initialize a new Git repository for your project:
git init

# Add all files to the new repository and commit them:
git add .
git commit -m "Initial commit from boilerplate"

# Connect your project to a new remote Git repository
git remote add origin <new-repository-url>
```

## Step 3: Rename the Project

1. Use the [react-native-rename](https://www.npmjs.com/package/react-native-rename) tool to rename the project:

```bash
yarn dlx react-native-rename "<new-project-name>" -b "<new-project-bundleId>"
```

Note: this command has a modifier to change the bundleId, but sometimes it doesn't fix the pathes for Android. To fix this please proceed to:
```bash
android > app > src > main > java > com
```
<br>2. (If rename didn't fix it) Rename/create needed folder that is needed for you bundleId (i.e. if you have `com.chat.app` then the path to the `MainActivity` and `MainApplication` should look like `java/com/chat/app`). 
<br>3. (If rename didn't fix it) After that fix the `package com.reactnativeboilerplate` in those files to the created path.
<br>4. Remove the excessive `reactnavitveboilerplate` folder inside that path `android > app > src > main > java > com`.
<br>5. Change the name of the app in the app's `build.gradle` file in the `productFlavors` section.
<br>6. Change the naming of the iOS app in the `AppDelegate.swift` file `self.moduleName = @"ReactNativeBoilerplate";` to the new project's name, i.e.: `self.moduleName = @"Chat App`
<br>7. Please double-check the bundleId on iOS as well.

## Step 4: Install Dependencies

```bash
# Install Node.js dependencies
yarn install

# Install Ruby dependencies
bundle install

# Install CocoaPods dependencies
cd ios
pod install
cd ..
```
## Step 5: Configure Environment Variables

The Boilerplate contains flavoring functionality by usage of the [react-native-config](https://www.npmjs.com/package/react-native-config) package.
By default the project has support for `production` and `qa` flavors. Please, create 2 `.env` files: `.env.production` and `.env.qa`. 2 defaults fields that should be added to these `.env` files are already listed in the `.env.template`. 

**Note: Specifying the flavor in `.env` files is mandatory!**

## Congratulations! :tada:

You've successfully created a new project from the Boilerplate!

## Advises and suggestions

- Do not use SVGs that has `fill` property in it. Remove it by hands from `<svg>` and `<path>` tags, otherwise the SVG won't change color in RN via `fill` property in the code.
Also, the `stroke` and other `mask`, `gradient` will affect coloring of the SVG. Try to avoid these properties, except cases when they are crucial (e.g. Google or App logo).
- After adding a new flavor don't forget to refresh the iOS config:
```bash
cd ios
rm -rf Pods Podfile.lock
xcodebuild clean
pod install
```
- Always use `prevState` lambda if managing the `state` in the `useEffect`:
```typescript
setAppState((prevState) => ({ ...prevState, isUserLoggedIn: isUserLoggedIn }));
```

### Now what?

Produce high quality code and be cool! 😎
