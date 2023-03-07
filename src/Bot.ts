import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import ready from "./events/ready";
import interactionCreate from "./events/interactionCreate";

dotenv.config();

const token = process.env.TOKEN;

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

ready(client);
interactionCreate(client);

client.login(token);
