import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Etudiant } from 'src/models/Etudiant';
import { EnseignantChercheur } from 'src/models/EnseignantChercheur';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{

  dataSource: Member[] = [];
  dataEtudiant: Etudiant[] = [];
  dataEnseignant: EnseignantChercheur[] = [];

  constructor(private ms: MemberService, private dialog: MatDialog) {}

  displayedColumns: string[] = ['cin', 'nom', 'prenom', 'dateNaissance', 'cv', 'email', 'dateInscription', 'diplome', 'encadrant', 'delete', 'edit'];
  displayedColumnsEnseignants: string[] = ['cin', 'nom', 'prenom', 'dateNaissance', 'cv', 'email', 'dateInscription', 'grade', 'etablissement', 'delete', 'edit'];
  ngOnInit(): void {
    
    this.getEtudiants();
    this.GetEnseignant();
  }

  getEtudiants(): void {
    this.ms.getAllStudents().subscribe((response) => {
      this.dataEtudiant = response;
    });
  }

  GetEnseignant(): void {
    this.ms.getAllTeachers().subscribe((resultat) => {
      this.dataEnseignant = resultat;
      console.log(resultat);
    });
  }

  delete(id: string): void {
    console.log(id);

    // Lancer la boîte de dialogue de confirmation
    const dialogRef = this.dialog.open(ConfirmComponent);

    // Attendre la réponse de l'utilisateur
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.ms.delete(id).subscribe(() => {
          // Réexécuter la requête pour actualiser les données après suppression
          this.ms.getAllMembers().subscribe((response) => {
            this.dataSource = response;
          });
        });
      }
    });
  }
}