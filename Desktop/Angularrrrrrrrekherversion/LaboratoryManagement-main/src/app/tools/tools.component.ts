import { Component, OnInit } from '@angular/core';
import { Outil } from 'src/models/outil';
import { OutilsService } from 'src/services/outils.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'source', 'date', 'action'];
  outils: Outil[] = [];

  constructor(private outilService: OutilsService) {}

  ngOnInit(): void {
    this.loadTools();
  }

  loadTools(): void {
    this.outilService.getOutils().subscribe((data) => {
      this.outils = data;
      console.log(this.outils)
    });
  }

  delete(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet outil ?')) {
      this.outilService.deleteOutil(id).subscribe(
        () => {
          // Filtrer les outils pour retirer l'outil supprimé
          this.outils = this.outils.filter(tool => tool.id !== id);
          console.log('Outil supprimé avec succès.');
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'outil:', error);
        }
      );
    }
  }
}