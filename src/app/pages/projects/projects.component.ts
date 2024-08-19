import { Component, OnInit } from '@angular/core';
import { ProjectObj } from '../../services/model/project';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from "../../services/model/project/project.component";
import projectsData from '../../../assets/projects-mock.json'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  public projectObjs: ProjectObj[] = projectsData as ProjectObj[];

  constructor() {}

  ngOnInit(): void {}
}