import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';
import {
  KYCInitiate,
  KYCInquiryResponse,
  KYCProcess,
  KYCStatus,
} from './kyc-model';

import { KycComponent } from './kyc.component';
import { KycService } from './kyc.service';

describe('KycComponent', () => {
  let component: KycComponent;
  let fixture: ComponentFixture<KycComponent>;
  let kycService: KycService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KycComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [KycService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    kycService = TestBed.inject(KycService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Unit test case for Subscription method for KYCInquiry with empty object', fakeAsync(() => {
    const userId = '123456789';
    const spy = spyOn(kycService, 'getKYCInquiry').and.returnValue(
      of({} as KYCInquiryResponse)
    );
    const subSpy = spyOn(kycService.getKYCInquiry(userId), 'subscribe');
    component.ngOnInit();
    tick();
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  it('Unit test case for Subscription method for KYCInquiry with response object', fakeAsync(() => {
    const testObj: KYCInquiryResponse = {
      status: 'success',
      statusCode: 200,
      kycStatus: KYCStatus.not_started,
      userId: '123456789',
    };
    spyOn(kycService, 'getKYCInquiry').and.returnValue(of(testObj));
    component.ngOnInit();
    tick();
    expect(component['kycStep']).toEqual(KYCStatus.not_started);
  }));

  it('Unit test case for Subscription method for KYCCredential with empty object', fakeAsync(() => {
    const userId = '123456789';
    const spy = spyOn(kycService, 'getKYCCredential').and.returnValue(
      of({} as KYCInitiate)
    );
    const subSpy = spyOn(kycService.getKYCCredential(userId), 'subscribe');
    component.startKYCProcess();
    tick();
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  it('Unit test case for Subscription method for KYCCredential with response object', fakeAsync(() => {
    const testObj = {
      kycUniqueReferenceId: '12345678',
      token: 't435rrtyf5667',
    };
    const userId = '123456789';
    const spy = spyOn(kycService, 'getKYCCredential').and.returnValue(
      of(testObj)
    );
    const subSpy = spyOn(kycService.getKYCCredential(userId), 'subscribe');
    component.startKYCProcess();
    tick();
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  it('Unit test case for SubmitKYC', fakeAsync(() => {
    const kycUniqueReferenceId = '12345678';
    const testObj: KYCProcess = {
      status: 'success',
      statusCode: 200,
      kycStatus: KYCStatus.auto_declined,
      userId: '123456789',
    };
    spyOn(kycService, 'submitKYC').and.returnValue(of(testObj));
    component['submitKYCResult'](kycUniqueReferenceId);
    tick();
    expect(component['kycStep']).toEqual(KYCStatus.auto_declined);
  }));
});
