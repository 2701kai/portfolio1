## gh-pages:

```bash
npm install gh-pages --save-dev
echo "node_modules/" >> .gitignore
```

#### added script to package.json:

```json
{
  "scripts": {
    "deploy": "gh-pages -b kai -d ./"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
}
```
