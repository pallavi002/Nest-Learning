import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({ 
    providers: [PowerService],
    exports: [PowerService], // this makes the PowerService available to other modules that import this module
})
export class PowerModule {}
