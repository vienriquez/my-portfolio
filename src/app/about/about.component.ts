import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  details = [
    {
      field: "Skills",
      value: "AngularJS, Angular, JavaScript, JQuery, GIT, HTML, CSS, Spring (Java EE), Postgres, Symfony (PHP), MySQL, C#, TFS"
    },
    {
      field: "Overview",
      value: "I have been working in the IT Industry for almost 9 years using different technologies that are required on the project and just when the pandemic started, I realized I can also manage working from home. I was able to use several frameworks such as Java Spring, PHP Symfony and Python Django on my company projects but I mostly like working on frontend stuff like Angular. I’m here in Brisbane to study Cyber Security in Tafe Queensland, and based on my schedule, I’m able to work full time since my class will be from Monday to  Friday from 6pm-9pm.  As per Immigration, they’ve removed the work limitation on all sectors because of work shortage (https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/temporary-relaxation-of-working-hours-for-student-visa-holders).",
      source: "https://drive.google.com/file/d/1zWBJvN4BFuYTdGnZ0OBUWI_jZWDLHj8A/view?usp=sharing"
    },
  ]

}
