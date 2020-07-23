import { Injectable } from '@nestjs/common';

import p from '../package.json';

@Injectable()
export class AppService {
  getVersion(): string {
    return p.version;
  }
}
