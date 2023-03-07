import { Client, Events } from "discord.js";
import Commands from "../Commands";

export default (client: Client): void => {
    client.on(Events.ClientReady, async() => {
        if(!client.user || !client.application) {
            return;
        }

        const commands = Commands.map(c => c.data);
        await client.application.commands.set(commands);

        console.log(`${client.user.tag} is online`);
    });
}