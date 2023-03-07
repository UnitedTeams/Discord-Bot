import fs from "fs";
import path from "path";
import { Collection } from "discord.js";
import { Command } from "./Command";

const extension = ".ts";

const commands : Collection<string, Command> = new Collection<string, Command>();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(extension));
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const fileName = path.basename(file, extension);

    const command: Command = require(filePath)[fileName];

    commands.set(command.data.name, command);
}

export default commands;