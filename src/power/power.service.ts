import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPower(watts: number) {
        return `Power is supplied: ${watts} watts`;
    }
}
