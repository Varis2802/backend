import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';

@Controller('connect-react')
export class ConnectReactController {
  @Post('update-json')
  updateJson(@Body('data') data: string, @Res() res: Response) {
    fs.writeFile('updatedData.json', data, (err) => {
      if (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Error writing to file');
        throw err;
      }
      res.status(HttpStatus.OK).send('Successfully wrote to file');
    });
  }
}
