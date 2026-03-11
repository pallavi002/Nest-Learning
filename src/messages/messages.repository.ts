import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository {
    async findOne(id: string): Promise<string> {
        // Simulate fetching a message by ID from a database
        const messages = await this.findAll();
        const message = messages[id];
        if (!message) {
            throw new Error(`Message with ID ${id} not found`);
        }
        return message;
    }

    async findAll(): Promise<string[]> {
        // Simulate fetching all messages from a database
        const messages = await readFile('messages.json', 'utf-8');
        const parsedMessages = JSON.parse(messages);
        return parsedMessages;
    }

    async create(message: string): Promise<void> {
        // Simulate creating a new message in a database
        const messages = await readFile('messages.json', 'utf-8');
        const parsedMessages = JSON.parse(messages);
        const newId = Date.now().toString();
        parsedMessages[newId] = { message };
        await writeFile('messages.json', JSON.stringify(parsedMessages, null, 2));
        console.log(`Created message: ${message}`);
    }
}