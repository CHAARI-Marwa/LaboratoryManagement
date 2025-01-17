import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { member } from 'src/models/member';
import { Outil } from 'src/models/outil';
import { MemberService } from 'src/services/member.service';
import { OutilsService } from 'src/services/outils.service';

@Component({
  selector: 'app-tools-form',
  templateUrl: './tools-form.component.html',
  styleUrls: ['./tools-form.component.css']
})
export class ToolsFormComponent implements OnInit {
  form!: FormGroup;
  isEditMode: boolean = false;
  outilId: number | null = null;
  membres: member[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private outilService: OutilsService,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      source: ['', Validators.required],
      date: ['', Validators.required],
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.outilId = +id;
        this.loadOutil(+id);
      }
    });
    this.loadMembers();
  }

  loadOutil(id: number): void {
    this.outilService.getOutilById(id).subscribe(
      (outil) => {
        this.form.patchValue({
          source: outil.source,
          date: outil.date,
        });
      },
      (error) => {
        console.error('Erreur lors du chargement de l\'outil', error);
      }
    );
  }

  loadMembers():void{
    this.memberService.getAllMembers().subscribe(
      (data: member[]) => {
        this.membres = data;  // Remplissez le tableau members avec les données récupérées
      },
      (error) => {
        console.error('Erreur lors de la récupération des membres', error);
      }
    );
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const formData: Outil = this.form.value;
    console.log(formData)
    if (this.isEditMode && this.outilId !== null) {
      this.outilService.updateOutil(this.outilId, formData).subscribe(
        () => {
          console.log('Outil mis à jour avec succès');
          this.router.navigate(['/tools']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'outil', error);
        }
      );
    } else {
      this.outilService.addOutil(formData).subscribe(
        () => {
          console.log('Nouvel outil ajouté avec succès');
          this.router.navigate(['/tools']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout d\'un nouvel outil', error);
        }
      );
    }
  }
}