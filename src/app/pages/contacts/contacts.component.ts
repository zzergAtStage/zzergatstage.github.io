import { Component, OnInit } from '@angular/core';
import contactData from '../../../assets/contacts-data.json'
import { CommonModule } from '@angular/common';
import { ContactObj } from './contact';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit{
  contactsData: ContactObj[] = contactData as ContactObj[];
  

  ngOnInit(): void {
  }
}
