import {SlashCommandBuilder, CommandInteraction} from "discord.js";

export default class Command {
    constructor(
        public data: SlashCommandBuilder|Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">,
        public execute: (interaction: CommandInteraction) => Promise<void>
    ) {
    }
}