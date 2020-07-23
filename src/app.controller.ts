import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private _appService: AppService) { }

  @Get('version')
  getVersion(): { version: string } {
    return {
      version: this._appService.getVersion(),
    };
  }
}
