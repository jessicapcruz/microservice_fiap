import { HttpHeaders } from "@angular/common/http";

export const customHeaders = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
