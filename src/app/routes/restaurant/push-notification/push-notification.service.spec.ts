import { TestBed, inject } from '@angular/core/testing';
import { PushNotificationService } from './push-notification.service';

describe('PushNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushNotificationService]
    });
  });

  it('should ...', inject([PushNotificationService], (service: PushNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
