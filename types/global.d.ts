declare namespace Incontrl {
    
    export type ClientConfig = {
        accessToken: string,
    };

    export type Config = ClientConfig

    export interface ISubscription {
        id: string;
        code: string;
        alias: string;
        status: SubscriptionStatus;
        company: IOrganisation;
        contact: IContact;
        notes: string;
        customData: any;
    }

    export interface IAddress {
        Name: string;
        Line1: string;
        Line2: string;
        City: string;
        ZipCode: string;
        CountryCode: string;
        Country: string;
        Phone1: string;
        Phone2: string;
        Notes: string;
    }

    export interface IAttachment {
        id: string;
        guid: string;
        name: string;
        fileExtension: string;
        contentType: string;
        contentLength: number;
        uri: string;
    }

    export interface IContact {
        id: string;
        code: string;
        firstName: string;
        lastName: string;
        email: string;
        address: IAddress;
        phone1: string;
        phone2: string;
        skype: string;
        notes: string;
    }

    export interface ITax {
        code?: string;
        name: string;
        rate: number;
        inclusive: boolean;
        isSalesTax: boolean;
        amount: number;
    }

    export interface IProduct {
        id: string;
        code: string;
        name: string;
        amount: number;
        taxes: ITax[];
        notes: string;
        publicNotes: string;
        tags: string;
    }

    export interface IOrganisation {
        id: string;
        code: string;
        logoPath: string;
        name: string;
        legalName: string;
        lineOfBusiness: string;
        taxCode: string;
        taxOffice: string;
        currencyCode: string;
        address: IAddress;
        email: string;
        website: string;
        notes: string;
        customData: any;
        paymentMethods: IPaymentOption[];
    }

    export interface IInvoice {
        id: string;
        typeId: string;
        number: number;
        numberPrintable: string;
        date: Date;
        dueDate: Date;
        status: InvoiceStatus;
        currencyCode: string;
        currencyRate: number;
        recipient?: IRecipient;
        paymentCode: string;
        lines: IInvoiceLine[];
        notes: string;
        publicNotes: string;
        tags: string;
        permaLink: string;
        subTotal: number;
        totalSalesTax: number;
        totalTax: number;
        total: number;
        totalPayable: number;
    }

    export interface IInvoiceLine {
        id: string;
        product: IProduct;
        description: string;
        quantity: number;
        unitAmount: number;
        discountRate: number;
        subTotal: number;
        totalTax: number;
        totalSalesTax: number;
        total: number;
        taxes: ITax[];
        notes: string;
        tags: string;
    }

    export interface InvoiceType {
        id: string;
        code: string;
        recordType: RecordType;
        name: string;
        culture: string;
        numberOffset: number;
        numberFormat: string;
        template: IAttachment;
        notes: string;
        tags: string;
        generatesDocuments: boolean;
    }
    
    export interface IInvoiceTracking {
        reads: number;
        recipient: string;
        created: Date;
        lastRead: Date;
        tracker: ITracker;
    }

    export interface ITracker {
        id: string;
        type: string;
        url: string;
        documentUrl: string;
    }

    export interface IPaymentOption {
        code: string;
        name: string;
        description: string;
        type: PaymentOptionType;
    }

    export interface IIssuer {
        organisation: IOrganisation;
        contact: IContact;
    }

    export interface IRecipient {
        organisation?: IOrganisation;
        contact?: IContact;
    }

    export interface IContactFilter {
        code?: string;
    }

    export interface IInvoiceListFilter {
        number?: string;
        from?: Date;
        to?: Date;
        status?: InvoiceStatus;
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

    export interface ISubscriptionStatusResponse {
        status: SubscriptionStatus;
    }

    export interface IUpdateSubscriptionStatusRequest {
        status: SubscriptionStatus;
    }

    export interface ICreateInvoiceRequest {
        typeId: string;
        number?: number;
        date?: Date;
        dueDate?: Date;
        status?: InvoiceStatus;
        currencyCode?: string;
        currencyRate?: number;
        recipient: IRecipient;
        paymentCode?: string;
        lines: IInvoiceLine[];
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
        recipient?: IRecipient;
        paymentCode?: string;
        lines: IInvoiceLine[];
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
        recordType: RecordType;
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
        recordType: RecordType;
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
        company: IOrganisation;
        contact: IContact;
        notes: string;
        customData: any;
    }

    export interface IFileResult {
        fileName: string;
        stream: BufferSource;
    }

    export interface IUpdateInvoiceStatusRequest {
        status: InvoiceStatus;
    }

    export interface IInvoiceStatusResponse {
        status: InvoiceStatus;
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
        address: IAddress;
        email: string;
        website: string;
        notes: string;
        customData: any;
    }

    export interface IUpdateCompanyRequest extends IUpdateOrganisationRequest {
        paymentMethods: IPaymentOption[];
    }
    
    export type InvoiceFormat = "pdf" | undefined;
    export type InvoiceStatus = "Draft" | "Issued" | "Overdue" | "Partial" | "Paid" | "Void" | "Deleted";
    export type PaymentOptionType = "BankTransfer" | "Online" | "UponDelivery";
    export type RecordType = "AccountsReceivable" | "AccountsPayable";
    export type SubscriptionStatus = "Enabled" | "Disabled" | "Deleted";
}
