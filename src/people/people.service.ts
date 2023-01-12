import { Injectable } from '@nestjs/common';
import { Person } from './entities/person.entity';

@Injectable()
export class PeopleService {

  findAll() : Promise<Person[]> {
    var person1 : Person = {
      Name : "MCSA",
      KeyNumber : "000765"
    }

    var person2 : Person = {
      Name : "MASB",
      KeyNumber : "000606"
    }

    var person3 : Person = {
      Name : "JAMO",
      KeyNumber : "000763"
    }
    
    return Promise.resolve([person1, person2, person3]);
  }
}
