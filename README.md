<h1 align="center">
  Binary-Style
</h1>

[Live Style Guide](https://style.binary.com/) - The style system and guide for Binary.com.
The goal of the project is to serve as base style for all Binary projects, and to ensure consistency and maintainability of the brand presentation.

![node](https://img.shields.io/badge/node-%3E%3D12.3.0-blue.svg) ![npm](https://img.shields.io/badge/npm-%3E%3D4.0.0-blue.svg)
## In this document:

-   [Pre-installation](#pre-installation)
-   [Quick start](#quick-start)
-   [How to contribute](#how-to-contribute)
-   [Manage releases](#manage-releases)
-   [Test link deployment](#test-link-deployment)

## Pre-installation

Before running or contribute to this project, you need to have the setup of the following packages in your environment

-   node
-   npm >=4.x.x
-   grunt
-   git 
## Quick start

1.  **Fork the project**

    In order to work on your own version, please fork the project to your own repo.

2.  **Clone using SSH**

    ```sh
    git clone git@github.com:your-github-username/binary-style.git
    ```

3.  **Enter project directory**

    ```sh
    cd binary-style
    ```

4.  **Install your dependencies:**

    ```sh
    npm install
    sudo npm install -g grunt-cli
    sudo gem install compass -n /usr/local/bin
    ```
5. **To build everything and run the test suite**

    ```sh
    grunt default
    ```

    optionally, you can run these to only build what you need, note that `copy` is a must:

    ```sh
    grunt copy
    grunt css
    grunt js
    ```

6.  **To start developing:**
    
    Run the following command to watch for js/css changes and rebuild on every change you make:

    ```sh
    sudo grunt serve
    ```

7.  **Open the source code and start editing!**

    Your site is now running at `https://127.0.0.1/`
## How to contribute

1. Create branch from the latest master branch

    ```sh
    git checkout master
    git pull upstream master
    git checkout -b [_your_branch_name]
    ```

2. Make your changes

3. Make pull request

-   Push your changes to your origin

    ```sh
    git push -u origin [_your_branch_name]
    ```

-   Click on the autogenerated link from the terminal to open the PR

-   Make sure to change the PR base to `master` branch


## Manage releases
### Release to Production

Merging the PRs to master branch deploys changes to production

```sh
grunt release --production=1 [--cleanup]
```

**Note**: The value is needed when more than one option is used

#### Parameters:

- `--production` (mandatory)
  - In order to prevent accidentally releasing to the wrong target, it is mandatory to provide it.
  - Your remote origin will be checked to be the correct target of the given parameter.
  - Your current branch will be checked to be the correct branch of the given parameter.
- `--cleanup` [optional]
  - Creates CNAME file
  - Deploys to gh-pages with the option `add: false`

### Publishing new version

To publish new package version to npm, run

```sh
grunt npm_publish
```
## Test link deployment

There are times that you are working on various branches at the same time, and you want to deploy/test each branch separately on your gh-pages, you can simply use `--branch=branchname` for grunt commands:
  
- Deploy your changes to a sub-folder named: `br_branchname` and it can be browsed at: https://     YOUR_GITHUB_USERNAME.github.io/binary-style/br_branchname/

    ```sh
    grunt deploy --branch=branchname
    ```

**Note:** In order to remove the created folders from your gh-pages, you can either:

1. Remove all `br_*` folders and deploy to the root folder:

  ```sh
  grunt deploy --cleanup
  ```

OR

2. Remove the specified folder(s) from your gh-pages:

  ```sh
  grunt shell:remove_folder --folder=br_branchname1,br_branchname2,...
  ```
