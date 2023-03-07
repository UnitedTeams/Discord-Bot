import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import { loadFiles } from "./Helpers";
import Event from './Event';

dotenv.config();

const token = process.env.TOKEN;

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

loadFiles<Event<any>>("events")
    .forEach(e => client.on(e.name, e.execute));

client.login(token);