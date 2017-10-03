# binary-style
Style system and guide for Binary.com

You can see the [Live Style Guide](https://style.binary.com/)

The goal of the project is to serve as base style for all Binary projects, and to ensure consistency and maintainability of the brand presentation.

### Usage
- Add [jQuery](https://jquery.com/) to your project

- Add this JS file to your project:

```
https://style.binary.com/binary.js
```

- If you need Date and Time Pickers, Tabs or Accordion include "binary.more.js" in your project, this will include a copy of jquery-ui with customized styles.

```
https://style.binary.com/binary.more.js
```

- This library is also aviable on `npm`

```
npm install --save binary-style
```

- If you need Date and Time Pickers, Tabs or Accordion import "binary-styles/binary.more" in addition to "binary-style"

```
import 'binary-style';
import 'binary-style/binary.more'; // Include custom build of jquery-ui@1.12.1
``` 

- For new projects it's remommended to `import 'binary-style/binary.isolated` instead,  
the only difference is that all css styles are wrapped inside a wrapper with `.binary-style` selector.
