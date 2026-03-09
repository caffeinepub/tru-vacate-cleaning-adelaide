import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface FormSubmission {
    id: bigint;
    serviceType: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    deleteForm(id: bigint): Promise<void>;
    getAllForms(): Promise<Array<FormSubmission>>;
    getFilteredFormsByTimestamp(days: bigint): Promise<Array<FormSubmission>>;
    searchFormsByName(searchText: string): Promise<Array<FormSubmission>>;
    searchFormsByServiceType(serviceType: string): Promise<Array<FormSubmission>>;
    submitForm(name: string, email: string, phone: string, serviceType: string, message: string): Promise<void>;
}
