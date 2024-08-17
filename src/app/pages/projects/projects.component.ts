import { Component, OnInit } from '@angular/core';
import { ProjectObj } from '../../services/model/project';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from "../../services/model/project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  public projectObjs: ProjectObj[] = [
    {
      title: "Developer's nest",
      linkObjs: [
        {
          label: 'Github repo',
          url: 'https://zzergatstage.github.io/cv-sample/',
          icon: 'github',
        },
      ],
      imageObj: {
        alt: 'Angular application and query management',
        src: '/assets/images/project/personal-page.png',
      },
    },
    {
      title: 'Yandex Split buy-now, pay-later service',
      linkObjs: [
        {
          label: 'Product web-site',
          url: '',
          icon: 'yandex',
        },
      ],
      imageObj: {
        alt: 'Ya bank products',
        src: '/assets/images/project/ya-split-proj.png',
      },
    },
    {
      title: 'Business data migration due merger of banks',
      linkObjs: [
        {
          label: 'NDA',
          url: '',
          icon: 'dev',
        },
      ],
      imageObj: {
        alt: 'Business data migration due merger of banks',
        src: '/assets/images/project/bank-merger.jpg',
      },
    },
    {
      title: 'Expenses accounting service',
      linkObjs: [
        {
          label: 'Read Post',
          url: '',
          icon: 'dev',
        },
        {
          label: 'Github repo',
          url: 'https://github.com/zzergAtStage/diploma',
          icon: 'github',
        },
      ],
      imageObj: {
        alt: 'Expenses accounting service',
        src: '/assets/images/project/expenses-calculator.png',
      },
    },
    {
      title: 'Eathquake analyzing service',
      linkObjs: [
        {
          label: 'Github repo',
          url: 'https://github.com/zzergAtStage/diploma',
          icon: 'github',
        },
      ],
      imageObj: {
        alt: 'Eathquake analyzing service',
        src: '/assets/images/project/earthquake-desktop.png',
      },
    },
    {
      title: 'Earthquake microservice operational',
      linkObjs: [
        {
          label: 'Github repo',
          url: 'https://github.com/zzergAtStage/diploma-server',
          icon: 'github',
        },
      ],
      imageObj: {
        alt: 'Earthquake microservice operational',
        src: '/assets/images/project/microservices.png'
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}