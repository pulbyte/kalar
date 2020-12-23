import { TestBed } from '@angular/core/testing';

import { ImageColorizerService } from './image-colorizer.service';

describe('ImageColorizerService', () => {
  let service: ImageColorizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageColorizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
