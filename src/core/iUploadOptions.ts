interface IUploadOptions {
  url: string | ((file: IUploadFile) => string);
  method: string;
  withCredentials?: boolean;
  headers?: { [key: string]: string | number | boolean };
  params?: { [key: string]: string | number | boolean | Blob };
  localizer?: ILocalizer;
}
