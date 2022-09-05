import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const url = environment.basePath+"/api/Talent_info/";
@Injectable({
  providedIn: 'root'
})
export class TalentInfoService {

  constructor(private http:HttpClient) { }
  gettalent_infos(){
    return this.http.get<any[]>(`${url}`);
  }
  newtalent_info(data:any){
    return this.http.post(`${url}`,data);
  }
  updatetalent_info(id:any,data:any){
    return this.http.put(`${url}/${id}`,data);
  }
  deletetalent_info(id:any){
    return this.http.delete(`${url}/${id}`);
  }

}
