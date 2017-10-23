import * as Models from "./models";

export interface ISubscriptionStatusResponse {
    status: Models.SubscriptionStatus;
}

export interface IUpdateSubscriptionStatusRequest {
    status: Models.SubscriptionStatus;
}

export interface ICreateInvoiceRequest {
    typeId: string;
    number?: number;
    date?: Date;
    dueDate?: Date;
    status?: Models.InvoiceStatus;
    currencyCode?: string;
    currencyRate?: number;
    recipient: Models.IRecipient;
    paymentCode?: string;
    lines: Models.IInvoiceLine[];
    serverCalculations?: boolean;
    notes?: string;
    publicNotes?: string;
    tags?: string;
    subTotal?: number;
    totalSalesTax?: number;
    totalTax?: number;
    total?: number;
    totalPayable?: number;
}

export interface IUpdateInvoiceRequest {
    date?: Date;
    dueDate?: Date;
    currencyCode?: string;
    currencyRate?: number;
    recipient?: Models.IRecipient;
    paymentCode?: string;
    lines: Models.IInvoiceLine[];
    serverCalculations?: boolean;
    notes?: string;
    publicNotes?: string;
    tags?: string;
    subTotal?: number;
    totalSalesTax?: number;
    totalTax?: number;
    total?: number;
    totalPayable?: number;
}

export interface ICreateInvoiceTypeRequest {
    name: string;
    code: string;
    culture: string;
    numberOffset: number;
    recordType: Models.RecordType;
    numberFormat: string;
    tags: string;
    notes: string;
    generatesDocuments?: boolean;
}

export interface IUpdateInvoiceTypeRequest {
    name: string;
    code: string;
    culture: string;
    numberOffset: number;
    recordType: Models.RecordType;
    numberFormat: string;
    tags: string;
    notes: string;
    generatesDocuments?: boolean;
}

export interface ICreateInvoiceTrackingRequest {
    recipient: string;
}


export interface ICreateSubscriptionRequest {
    code: string;
    alias: string;
    company: Models.IOrganisation;
    contact: Models.IContact;
    notes: string;
    customData: any;
}

export interface IFileResult {
    fileName: string;
    stream: BufferSource;
}

export interface IUpdateInvoiceStatusRequest {
    status: Models.InvoiceStatus;
}

export interface IInvoiceStatusResponse {
    status: Models.InvoiceStatus;
}

export interface IUpdateOrganisationRequest {
    code: string;
    logoPath: string;
    name: string;
    legalName: string;
    lineOfBusiness: string;
    taxCode: string;
    taxOffice: string;
    currencyCode: string;
    address: Models.IAddress;
    email: string;
    website: string;
    notes: string;
    customData: any;
}

export interface IUpdateCompanyRequest extends IUpdateOrganisationRequest {
    paymentMethods: Models.IPaymentOption[];
}

export interface IContactFilter {
    code?: string;
}

export interface IInvoiceListFilter {
    number?: string;
    from?: Date;
    to?: Date;
    status?: Models.InvoiceStatus;
    recipientCode?: string;
    recipientId?: string;
    typeId?: string;
}

export interface ISubscriptionListFilter {
    code?: string;
}

export interface IOrganisationFilter {
    customers?: boolean;
    suppliers?: boolean;
    code?: string;
}