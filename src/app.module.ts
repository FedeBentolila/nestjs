import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.wsvmh2e.mongodb.net/ecommerce?retryWrites=true&w=majority'),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
