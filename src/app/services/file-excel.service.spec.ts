import { TestBed } from '@angular/core/testing';

import { FileExcelService } from './file-excel.service';

describe('FileExcelService', () => {
  let service: FileExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
