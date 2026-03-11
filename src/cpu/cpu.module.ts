import { Module } from '@nestjs/common';
import { PowerModule } from '../power/power.module';
import { CpuService } from './cpu.service';

@Module({
    imports: [PowerModule], // this allows us to use the PowerService in this module
    providers: [CpuService], // this registers the CpuService in the NestJS dependency injection system
    exports: [CpuService], // export any services that this module provides to other modules
})
export class CpuModule {}
