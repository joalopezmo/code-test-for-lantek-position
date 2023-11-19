import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'nx-monorepo-example-remote-entry',
  template: `<nx-monorepo-nx-welcome></nx-monorepo-nx-welcome>`,
})
export class RemoteEntryComponent {}
