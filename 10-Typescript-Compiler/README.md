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

# Include Compiler Option

- Specifies an array of filenames or patterns to include in the program.
- These filenames are resolved relative to the directory containing the tsconfig.json file.

### open "tsconfig.json"

```json
{
  "include": ["src/**/*", "tests/**/*"]
}
```

include and exclude support wildcard characters to make glob patterns:

    * matches zero or more characters (excluding directory separators)
    ? matches any one character (excluding directory separators)
    **/ matches any directory nested to any level


# Exclude Compiler Option

Specifies an array of filenames or patterns that should be skipped when resolving include.

Important: exclude only changes which files are included as a result of the include setting. A file specified by exclude can still become part of your codebase due to an import statement in your code, a types inclusion, a /// <reference directive, or being specified in the files list.

It is not a mechanism that prevents a file from being included in the codebase - it simply changes what the include setting finds.
