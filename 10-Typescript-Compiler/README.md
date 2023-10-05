# Configuring TypeScript Complier
```bash
tsc --init
```

```
Created a new tsconfig.json with:

  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```
### Create a typescript file, index.ts and add some code to it.
```bash
tsc index.ts
```
### index.js file is created

# Watch Mode
```bash
tsc -w filename

tsc --watch filename
```
watch mode for multiple files

```bash
tsc -w

tsc --watch
```

# Files Compiler Option

- Specifies an allowlist of files to include in the program.
- An Error occurs if any of the files can't be found.
- Add these after the compiler options.

### open "tsconfig.json"

```json
{
  "compilerOptions": {},
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
}
```
