// Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_LOGO } from '../../../../../app/core/constants/imgs.constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  LOGO = APP_LOGO;
  services_we_offer = [
    { id: '1', name: 'First Service', description: 'Spoon' },
    { id: '2', name: 'Second Service', description: 'Fork' },
    { id: '3', name: 'Third Service', description: 'Knife' },
  ];

  ngOnInit(): void {
  }
}
