import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/models/member';

//le service se déclare capable d'etre injecté  on peut l'utiliser dans autre services et components 
//@injectable : décorateur qui permet d'injecter le service  dans les components et services
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  // fonctions qui representent des CRUD sur Member
  //quand je lance la req angular lance un thread de type observable: 3 partie de l'observable subscriber w observer w notification
  //service houwa subscriber
  //json server c l'observable and notification houwa tableau de membre 
  getAllMembers():Observable<Member[]>
  {
    //envoie d'une requete en mode get
    return this.http.get<Member[]>('http://localhost:3000/members')
  }
  add( m: Member):Observable<void>{
    return this.http.post<void>('http://localhost:3000/members',m);
  }
  deleteMember( id: String):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/members/${id}`); //pour ectraire l'id de l'url on doit utiliser `` et en cas de delete on doit envoyer l'id dand l'url
  }
  getMemberById( id: String):Observable<Member>{
    return this.http.get<Member>(`http://localhost:3000/members/${id}`)
  }
  updateMember(m: Member, id: string): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/members/${id}`, m);
  }
}
