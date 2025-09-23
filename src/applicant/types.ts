export interface PhoneConfirmationBody {
    phone: string
    confirmation_code: string
}

export interface PhoneInfoResponse {
    phone: {
        city: string
        country: string
        formatted: string
        need_verification: boolean
        number: string
        restricted_country: boolean
        verified: boolean
    }
}

export interface PhoneSendCodeResponse {
    can_request_code_again_in: number
    code_length: number
    notification_type: string
}

export interface Resume {
  id: string;
  title: string;
  created_at: string;
}

export interface ResumeListResponse {
  items: Resume[];
  found: number;
  page: number;
  pages: number;
  per_page: number;
}
