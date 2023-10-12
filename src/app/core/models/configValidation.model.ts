export enum ErrorKeys {
    'REQUIRED' = 'required',
    'EMAIL' = 'email',
}

export type ConfigValidation =  {
    [key in ErrorKeys]: string
}