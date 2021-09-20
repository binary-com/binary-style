
## Usage

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

## Manual import

- The library is available on `npm`

```sh
npm install --save binary-style
```

- If you need Date and Time Pickers, Tabs or Accordion import "binary-styles/binary.more" in addition to "binary-style"

```sh
import 'binary-style';
import 'binary-style/binary.css';
import 'binary-style/binary.more'; // This includes a custom jquery-ui@1.12.1 build
import 'binary-style/binary.more.css'; // This includes custom styles for jquery-ui
```

- For new projects it's recommended to `import 'binary-style/binary.isolated.css` instead,

```sh
import 'binary-style/binary.isolated.css';
```

The only difference is that all css styles are wrapped inside a wrapper with `.binary-style` selector.
