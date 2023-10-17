import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class StackOverflowService {
  constructor(private http: HttpService) {}

  getQuestions(searchString: string): Observable<any> {
    const url = `
    https://api.stackexchange.com/search/advanced?site=stackoverflow.com&q=${searchString}`;

    return this.http.get(url).pipe(
      map((response) => response.data.items),
      catchError((error) => {
        console.error('Error fetching data from Stack Overflow API:', error);
        throw new Error('Unable to fetch data at the moment');
      }),
    );
  }
}
