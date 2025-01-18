import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  // Méthode pour fermer le dialogue avec une valeur false (annuler)
  onCancel(): void {
    this.dialogRef.close(false);  // Cela ferme le dialogue sans confirmation
  }

  // Méthode pour fermer le dialogue avec une valeur true (confirmer)
  onConfirm(): void {
    this.dialogRef.close(true);  // Cela ferme le dialogue avec confirmation
  }
}
