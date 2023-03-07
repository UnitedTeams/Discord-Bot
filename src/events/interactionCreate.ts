import { Client, Events, Interaction } from "discord.js";
import commandHandler from "../commandHandler";

export default (client: Client): void => {
    client.on(Events.InteractionCreate, async(interaction: Interaction) => {
        await commandHandler(interaction);
    });
};