import {SlashCommandBuilder, ChatInputCommandInteraction} from "discord.js";

export default class Command {
    constructor(
        public data: SlashCommandBuilder|Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">,
        public execute: (interaction: ChatInputCommandInteraction) => Promise<void>
    ) {
    }
}
