# csa-practice-offchain-100

Install NodeJS with npm or pnpm or yarn (package managers)

# package.json
```
npm init
```
or
```
pnpm init
```

## Install typescript
```
npm install --save-dev typescript
```
```
pnpm add -D typescript
```

## Setup typescript config
to setup a default ts config
```
pnpm tsc --init
```

```
pnpm tsc --init --rootDir src --outDir dist --target esnext --module NodeNext --moduleResolution NodeNext
```

## Create src folder and index.ts
```
mkdir src 
code src/index.ts
```

## Compile our ts file
```
pnpm tsc
```
```
npx tsc
```

## Run the compiled code
```
node dist/index.js
```


## Install bundler
```
pnpm add tsup -D
```
or
```
npm install --save-dev tsup
```