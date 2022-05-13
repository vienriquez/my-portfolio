import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newsfeed = [
    {
      headline: "Temporary relaxation of working hours for student visa holders",
      story: "​To address workforce shortages, student visa work hours have been temporarily relaxed. This measure takes effect immediately for all ongoing students as well as new student arrivals, including secondary applicants. Students will be able to work before their course of study commences. They will also be able to work more than 40 hours a fortnight in any sector of the economy. These temporary measures remain in place until further notice. Students must ensure they are aware of any changes to visa conditions, including work rights.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/temporary-relaxation-of-working-hours-for-student-visa-holders#:~:text=Students%20will%20be%20able%20to,visa%20conditions%2C%20including%20work%20rights."
    },
    {
      headline: "Information for employers",
      story: "Employers must continue to follow Australian workplace law. Overseas workers, including international students, have the same rights under Australian workplace law as all other employees.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/temporary-relaxation-of-working-hours-for-student-visa-holders#:~:text=Students%20will%20be%20able%20to,visa%20conditions%2C%20including%20work%20rights."
    }
  ]
}
