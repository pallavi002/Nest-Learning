import { Get, Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {}

    @Get()
    getData() {
        return this.powerService.supplyPower(5);
    }
}
