import { Collection } from 'discord.js';
import Command from './Command';
import { loadFiles } from './Helpers';

const commands: Collection<string, Command> = new Collection<string, Command>();

loadFiles<Command>('commands').then((loadedCommands) =>
  loadedCommands.forEach((c) => commands.set(c.data.name, c)),
);

export default commands;
