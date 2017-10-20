# Binary-Style
Style system and guide for Binary.com

You can see the [Live Style Guide](https://style.binary.com/)

The goal of the project is to serve as base style for all Binary projects, and to ensure consistency and maintainability of the brand presentation.

### Usage
- Add [jQuery](https://jquery.com/) to your project

- Add these files to your project:

```
https://style.binary.com/binary.js
https://style.binary.com/binary.css
```

- If you need Date and Time Pickers, Tabs or Accordion include "binary.more.js" and "binary.more.css" in your project, this will include a copy of jquery-ui with customized styles.

```
https://style.binary.com/binary.more.js
https://style.binary.com/binary.more.css
```

### NPM Usage (Recommended)
- The library is available on `npm`

```
npm install --save binary-style
```

- If you need Date and Time Pickers, Tabs or Accordion import "binary-styles/binary.more" in addition to "binary-style"

```
import 'binary-style';
import 'binary-style/binary.css';
import 'binary-style/binary.more'; // This includes a custom jquery-ui@1.12.1 build
import 'binary-style/binary.more.css'; // This includes custom styles for jquery-ui
``` 

- For new projects it's recommended to `import 'binary-style/binary.isolated.css` instead,  

```
import 'binary-style/binary.isolated.css';
```

The only difference is that all css styles are wrapped inside a wrapper with `.binary-style` selector.


## How to work with this project

### Installation

You need to have:

- The latest version of `node`
- Version 4.x.x of `npm` (`npm install npm@4 -g`)

```bash
npm install
sudo npm install -g grunt-cli
```

### Deploy to your gh-pages
```
grunt deploy
```

### Using sub-folders
There are times that you are working on various branches at the same time, and you want to deploy/test each branch separately on your gh-pages, you can simply use `--branch=branchname` for grunt commands:
- `grunt deploy --branch=branchname`
This will deploy your changes to a sub-folder named: `br_branchname` and it can be browsed at: https://YOUR_GITHUB_USERNAME.github.io/binary-style/br_branchname/

In order to remove the created folders from your gh-pages, you can use either:
- `grunt deploy --cleanup`: removes all `br_*` folders and deploys to the root folder.

  or
- `grunt shell:remove_folder --folder=br_branchname1,br_branchname2,...`: only removes the specified folder(s) from your gh-pages.

### Preview on your local machine
```
sudo grunt serve
```
It will watch for js/css changes and rebuild on every change you make.


## Release to Production

```
grunt release --production=1 [--cleanup]
```
(The value is needed when more than one option is used)

### Parameters:
- `--production` (mandatory)
  - In order to prevent accidentally releasing to the wrong target, it is mandatory to provide it.
  - Your remote origin will be checked to be the correct target of the given parameter.
  - Your current branch will be checked to be the correct branch of the given parameter.
- `--cleanup` [optional]
  - Creates CNAME file
  - Deploys to gh-pages with the option `add: false`
