import { Client, REST, Routes } from "discord.js";
import Event from "../Event";
import Commands from "../Commands";

export default new Event("ready", async (client: Client) => {
    if(!client.user || !client.application) {
        return;
    }

    await registerCommands();

    console.log(`${client.user.tag} is online`);
});

const registerCommands = async() => {
    const commands = Commands.map(c => c.data.toJSON());

    const token = process.env.TOKEN;
    const applicationId = process.env.APPLICATION_ID;
    const guildId = process.env.GUILD_ID;

    if(!token || !applicationId || !guildId) {
        console.warn("Secrets are not set in .env. Bot commands will not be registered.");
        return;
    }

    const rest = new REST().setToken(token);

    try {
        console.log(`Registering ${commands.length} bot (/) commands`);

        await rest.put(
            Routes.applicationGuildCommands(applicationId, guildId),
            { body: commands }
        );

        console.log(`Successfully registered bot (/) commands.`);
    } catch (error) {
        console.error(error);
    }
};