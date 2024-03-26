import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { WebService } from './web.service';
@Controller('web')
export class WebController {
    constructor(private readonly webService: WebService) {}

    @Post('createProposal')
    createProposal(@Query('pubKey') pubkey : string , @Body() proposal : any) {
      return this.webService.createProposal(pubkey,proposal);
    }
    @Get('checkOrganization')
    checkOrganization(@Query('pubkey') pubkey : string) {
      return this.webService.checkOrganization(pubkey);
    }
    @Post('createOrganization')
    createOrganization(@Body() organization : any) {
      return this.webService.createOrganization(organization);
    }


}
