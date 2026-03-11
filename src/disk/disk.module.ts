import { Module } from '@nestjs/common';
import { PowerModule } from '../power/power.module';
import { DiskService } from './disk.service';

@Module({
    imports: [PowerModule], // import the PowerModule so DiskService can use PowerService
    providers: [DiskService],
    exports: [DiskService], // export any services that this module provides to other modules
})
export class DiskModule {}
