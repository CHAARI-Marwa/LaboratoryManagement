import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/models/evt';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  getAllEvent():Observable<Evt[]>
  {
    //envoie d'une requete en mode get
    return this.http.get<Evt[]>('http://localhost:3000/evt')
  }
  addEvent(event: Event):Observable<Evt>
  {
    return this.http.post<Evt>('http://localhost:3000/evt',event)
  }
  getEventById( id: String):Observable<Evt>{
    return this.http.get<Evt>(`http://localhost:3000/evt/${id}`)
  }
  update(event: Evt, id: string): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/evt/${id}`, event);
  }
}
