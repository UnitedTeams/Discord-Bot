import { Collection } from "discord.js";
import Command from "./Command";
import { loadFiles } from "./Helpers";

const commands : Collection<string, Command> = new Collection<string, Command>();

for (const command of loadFiles<Command>("commands")) {
    commands.set(command.data.name, command);
}

export default commands;