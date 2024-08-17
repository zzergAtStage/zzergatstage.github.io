import { Component, Input, OnInit } from '@angular/core';
import { ProjectObj } from '../project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  public iconClasses = {
    dev: 'fa-brands fa-dev',
    github: 'fab fa-github',
    preview: 'fas fa-eye',
  };

  @Input()
  projectObj: ProjectObj | null = null;

  constructor() {}

  ngOnInit(): void {}
}