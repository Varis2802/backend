import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';

@Controller('connect-react')
export class ConnectReactController {
    @Post('update-json')
  updateJson(@Body() data: any, @Res() res: Response) {
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Error writing to file');
        throw err;
      }
      res.status(HttpStatus.OK).send('Successfully wrote to file');
    });
  }
}
