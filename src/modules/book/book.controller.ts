import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Get()
  async find() {
    return this.bookService.findaAll()
  }

  @Post()
  async create(@Body() data: BookDto) {
    return this.bookService.create(data)
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: BookDto) {
    return this.bookService.update(id, data)
  }
}
