import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Phone } from '../interfaces/phone';
import { PhoneExtended } from '../interfaces/phoneExtended';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  private url = 'https://ozwiena.github.io/Data/phones.json'
  private urlExt = 'https://ozwiena.github.io/Data/phones'

  favFromLocalStorage = JSON.parse(localStorage.getItem('fav')!) || [];
  cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')!) || [];

  constructor(private http: HttpClient) {}

  loadAllPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.url)
  }

  loadPhonesExtended(id: string): Observable<PhoneExtended> {
    return this.http.get<PhoneExtended>(`${this.urlExt}/${id}.json`)
  }
}
