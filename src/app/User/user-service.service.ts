import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url4=environment.basePath+"pesonalDetail/";
  
@Injectable({
  providedIn: 'root'
})
export class UserServiceService  {
private url2 = "http://localhost:8080/pesonalDetail/login/";
private url3 = "http://localhost:8080/pesonalDetail/all_info";
  constructor(private http:HttpClient) { }
  getpersonalDetails(){
    return this.http.get<any[]>(`${url4}`);
  }
  newpersonalDetail(data:any){
    return this.http.post(`${url4}`,data);
  }
  updatepersonalDetail(id:any,data:any){
    return this.http.put(`${url4}/${id}`,data);
  }
  deletepersonalDetail(id:any){
    return this.http.delete(`${url4}/${id}`);
  }
log(data:any){
  return this.http.post(`${this.url2}`,data);
}

all(id:any){
  return this.http.delete(`${this.url3}/${id}`,id);
}
}