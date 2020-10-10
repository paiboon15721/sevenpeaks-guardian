# The Guardian

The distraction-free minimal news website powered by The Guardian Open Platform API.

## Screenshot

![The Guardian](https://raw.githubusercontent.com/paiboon15721/sevenpeaks-guardian/main/screenshot.png)

## Demo

[https://guardian.secretsrc.com](https://guardian.secretsrc.com)

## Development

1. Clone this repository

```bash
git clone git@github.com:paiboon15721/sevenpeaks-guardian.git
cd sevenpeaks-guardian
```

2. Add server `.env` file

```bash
mv server/.env.example server/.env
```

3. Add your own `GUARDIAN_KEY` in the `.env` file

```bash
GUARDIAN_KEY=<your-key-here>
GUARDIAN_URL=https://content.guardianapis.com
NODE_ENV=production
```

4. Start develop server

```bash
cd server
npm run watch # Start typescript compiler
npm run dev # Start nodemon
```

5. Start develop client

```bash
cd client
npm run dev
```

## Deployment

1. Clone this repository

```bash
git clone git@github.com:paiboon15721/sevenpeaks-guardian.git
cd sevenpeaks-guardian
```

2. Add server `.env` file

```bash
mv server/.env.example server/.env
```

3. Add your own `GUARDIAN_KEY` in the `.env` file

```bash
GUARDIAN_KEY=<your-key-here>
GUARDIAN_URL=https://content.guardianapis.com
NODE_ENV=production
```

4. Start all services

```bash
docker-compose up -d
```

## License

The Guardian is [MIT licensed](./LICENSE).
