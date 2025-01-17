import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnseignantChercheur } from 'src/models/EnseignantChercheur';
import { Etudiant } from 'src/models/Etudiant';
import { Member } from 'src/models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  getAllMembers(): Observable<Member[] >
  {
    return this.http.get<Member[]>('http://localhost:9000/MEMBRESERVICE/membres')
  }
  getAllStudents():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>('http://localhost:9000/MEMBRESERVICE/membres/etudiants')
  }
  getAllTeachers():Observable<EnseignantChercheur[]>{
    return this.http.get<EnseignantChercheur[]>('http://localhost:9000/MEMBRESERVICE/membres/teachers')
  }
  add(x:Member): Observable<void>
  {
  return this.http.post<void>('http://localhost:9000/MEMBRESERVICE/membres/enseignant',x)
  }
  delete(id:string): Observable<void>
  {
    return this.http.delete<void>(`http://localhost:3000/members/${id}`)
  }
  getMemberById(id:string):Observable<Member>
  {
    return this.http.get<Member>(`http://localhost:3000/members/${id}`)
  }
  updateMember(x:Member,id:string):Observable<void>{
    return this.http.put<void>(`http://localhost:3000/members/${id}`,x)
  }
  addEtudiant(etudiant: EnseignantChercheur): Observable<EnseignantChercheur> {
    return this.http.post<EnseignantChercheur>('http://localhost:9000/MEMBRESERVICE/membres/enseignant', etudiant);
  }
 
}