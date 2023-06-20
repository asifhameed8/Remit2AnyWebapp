
interface Common {
    status: string;
    statusCode: number;
}

interface Message {
    message: string;
    description?: string;
}

export interface KYCInitiate{
    kycUniqueReferenceId: string;
    token: string;
}
export enum KYCStatus {
  // Not started before
  not_started = "not_started",
  // started
  started = "started",
  // KYC verification issue
  user_cancelled  = "user_cancelled",
  error = "error",

  // No actions from user, Waiting on us to review and verify
  needs_review = "needs_review",

  // Manual approval steps
  manually_approved = "manually_approved",
  auto_approved = "auto_approved",

  // Start KYC process again
  manually_declined = "manually_declined",
  auto_declined = "auto_declined"
}

export interface KYCInquiryResponse extends Common {
    userId: string
    kycStatus: KYCStatus
}

// export interface KYCDetail{
//     details: any;
//     userID: string;
//     transactionId: string;
//     status: string
// }

export interface KYCProcess extends KYCInquiryResponse{}
