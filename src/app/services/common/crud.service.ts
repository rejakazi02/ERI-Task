import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const API_NEW_EXPENSE = environment.apiBaseLink + '/api/ed22eb2c20654f7681ffc8ce7a55e998/';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}

  /**
   * addCrud 
   * getAllCruds
   * getCrudById
   * updateCrudById
   * deleteCrudById
   */

  addCrud(data: any) {
    return this.httpClient.post<any>(API_NEW_EXPENSE + 'person', data);
  }

  // getAllCrud(filterData: FilterData, searchQuery?: string) {
  //   let params = new HttpParams();
  //   if (searchQuery) {
  //     params = params.append('q', searchQuery);
  //   }
  //   return this.httpClient.post<{
  //     data: Crud[];
  //     count: number;
  //     success: boolean;
  //   }>(API_NEW_EXPENSE + 'get-all/', filterData, { params });
  // }

  // getCrudById(id: string, select?: string) {
  //   let params = new HttpParams();
  //   if (select) {
  //     params = params.append('select', select);
  //   }
  //   return this.httpClient.get<{
  //     data: Crud;
  //     message: string;
  //     success: boolean;
  //   }>(API_NEW_EXPENSE + id, { params });
  // }

  // updateCrudById(id: string, data: Crud) {
  //   return this.httpClient.put<{ message: string; success: boolean }>(
  //     API_NEW_EXPENSE + 'update/' + id,
  //     data
  //   );
  // }

  // deleteCrudById(id: string) {
  //   return this.httpClient.delete<ResponsePayload>(API_NEW_EXPENSE + 'delete/' + id);
  // }

  // deleteCrudById(id: string, checkUsage?: boolean) {
  //   let params = new HttpParams();
  //   if (checkUsage) {
  //     params = params.append('checkUsage', checkUsage);
  //   }
  //   return this.httpClient.delete<ResponsePayload>(
  //     API_NEW_EXPENSE + 'delete/' + id,
  //     { params }
  //   );
  // }


}
