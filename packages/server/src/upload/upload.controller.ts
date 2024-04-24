import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { RequireLogin } from 'src/common/public-decorator';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  @RequireLogin()
  upload(@UploadedFile() file) {
    const relativePath = file.path.replace(/\\/g, '/').split('/dist/')[1];
    return { filePath: relativePath };
  }
}
