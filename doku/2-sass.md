## SASS installiert

```bash
npm i sass

#nötige Dateien und Ordner angelegt:
mkdir src && mkdir src/scss && cd src/scss
touch main.scss
```

> script added to package.json:

```json
    "sass": "sass --watch src/scss/main.scss style.css"
```

```bash
# executed
npm run sass
#to compile "test nav"
```
