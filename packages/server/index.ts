import cors from 'cors';
import express from 'express';
import http from 'http';
import path from 'path';
import resolvers from './graphql/resolvers';
import {ApolloServer} from '@apollo/server';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import {config} from 'dotenv';
import {expressMiddleware} from '@as-integrations/express5';
import {fileURLToPath} from 'url';
import {readFileSync} from 'fs';

config({path: path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '.env')});
const app = express();

app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);

const typeDefs = readFileSync('./graphql/schema.graphql', {encoding: 'utf-8'});

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});

await apolloServer.start();

app.use(
	'/graphql',
	cors<cors.CorsRequest>(),
	express.json(),
	expressMiddleware(apolloServer),
);

httpServer.listen(Number(process.env.VITE_PORT), process.env.VITE_HOSTNAME);

httpServer.on('listening', () => {
	const address = httpServer.address();

	console.log(`Listening on ${
		typeof address === 'string' ? `pipe ${address}` : address ? `port ${address.port}` : ''
	}`);
});
