import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GithubService {
  constructor(private readonly http: HttpService) {}

  searchRepositories(query: string) {
    const url = `https://api.github.com/search/repositories?q=${query}`;
    return this.http
      .get(url)
      .pipe(
        catchError((error) => {
          if (error.response) {
            // Handle HTTP error responses from the server
            const remaining = error.response.headers['x-ratelimit-remaining'];
            if (remaining && Number(remaining) === 0) {
              const resetTime = error.response.headers['x-ratelimit-reset'];
              throw new Error(
                `Rate limit exceeded. Try again at ${new Date(
                  Number(resetTime) * 1000,
                ).toLocaleTimeString()}`,
              );
            }
          }
          // Handle other types of errors e.g. network errors, or issues with the request
          console.error('Error fetching data from GitHub API:', error);
          throw new Error('Unable to fetch data at the moment');
        }),
      )
      .toPromise();
  }
}
