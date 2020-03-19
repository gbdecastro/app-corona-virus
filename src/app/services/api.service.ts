import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getBrazil()
  {
    return this.http.get(this.BASE_URL+"/api/data/brazil")
  }

  getWorld()
  {
    return this.http.get(this.BASE_URL+"/api/data/world")
  }

  getBrazilStates()
  {
    return this.http.get(this.BASE_URL+"/api/data/brazil")
  }

}
