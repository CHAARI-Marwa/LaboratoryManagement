import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{

  form!: FormGroup;
  selectedFileName: string = ''; // For displaying the selected file name

  constructor(
    private ms: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

      this.initForm();
  
  }

  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      prenom: new FormControl(null, [Validators.required]),
      dateNaissance: new FormControl(null, [Validators.required]),
      photo: new FormControl(null, ),
      cv: new FormControl(null, ),
      email: new FormControl(null, [Validators.required]),
      pubs: new FormControl(null, ),
      grade: new FormControl(null, [Validators.required]),
      etablissement: new FormControl(null, [Validators.required]),

    });
  }

  // File selection handler
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedFileName = file.name; // Display the file name
      this.form.patchValue({
        cv: file.name // Save the file name in the 'cv' field
      });
    }
  }

  sub(): void {
    
    const formData = {
      ...this.form.value,
     
      
    };
    console.log(formData);
   this.ms.addEtudiant(formData).subscribe(() => {
        this.router.navigate(['/member']);
      });
    }
  
}