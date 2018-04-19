import { TestBed, inject } from '@angular/core/testing';

import { FeedNewsService } from './feed-news.service';

describe('FeedNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedNewsService]
    });
  });

  it('should be created', inject([FeedNewsService], (service: FeedNewsService) => {
    expect(service).toBeTruthy();
  }));
});
