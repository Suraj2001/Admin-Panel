import { TestBed } from '@angular/core/testing';

import { UserListService } from './user-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserListService', () => {
  let service: UserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
