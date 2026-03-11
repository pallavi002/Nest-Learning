import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";


@Injectable()
export class MessagesService {
    constructor(private messagesRepository: MessagesRepository) {}

    findAll() {
        return this.messagesRepository.findAll();
    }

    create(message: string) {
        this.messagesRepository.create(message);
    }

    findById(id: string) {
        return this.messagesRepository.findOne(id);
    }
}