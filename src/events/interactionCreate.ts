import { Interaction } from "discord.js";
import commandHandler from "../commandHandler";
import Event from "../Event";

export default new Event("interactionCreate", async(interaction: Interaction) => {
    await commandHandler(interaction);
});