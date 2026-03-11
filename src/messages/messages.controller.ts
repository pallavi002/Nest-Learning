import { Body, Controller, Get, Param, Post, NotFoundException } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { CreateMessageDto } from "./create-message.dto";

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @Get()
    getAllMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        this.messagesService.create(body.message);
        return { status: 'created' };
    }

    @Get(':id')
    async getMessageById(@Param('id') id: string) {
        const msg = await this.messagesService.findById(id);
        if (!msg) {
            throw new NotFoundException(`Message with ID ${id} not found`);
        }
        return msg;
    }
}