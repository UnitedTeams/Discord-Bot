import { Interaction } from "discord.js";
import Commands from "./Commands";

export default async(interaction: Interaction): Promise<void> => {
    if(!interaction.isChatInputCommand()) {
        return;
    }

    const command = Commands.get(interaction.commandName);
    if(!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);

        await interaction.followUp({
            content: "There was an error while executing this command!",
            ephemeral: true
        });
    }
}